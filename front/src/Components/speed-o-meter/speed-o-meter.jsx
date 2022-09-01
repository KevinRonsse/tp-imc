import React, { useMemo } from "react";
import { useGauge } from "use-gauge";

// tests 
// https://codesandbox.io/s/i19w7?file=/src/gauges/stat.tsx:0-263
// https://github.com/mattrothenberg/use-gauge
// https://github.com/mattrothenberg/use-gauge/blob/main/example/index.tsx

const START_ANGLE = 45;
const END_ANGLE = 315;

export function DemoGauge(props) {
    const { value } = props;
    const gauge = useGauge({
        domain: [0, 100],
        startAngle: START_ANGLE,
        endAngle: END_ANGLE,
        numTicks: 20,
        diameter: 240
    });

    const { tip, base, points } = gauge.getNeedleProps({
        value,
        baseRadius: 4,
        tipRadius: 2,
    });

    const arcStroke = useMemo(() => {
        let color = "";
        if (value <= 25) {
            color = `green`;
        } else if (value <= 50) {
            color = "yellow";
        } else {
            color = "red";
        }

        return `url(#${color}Gradient)`;
    }, [value]);

    return (
        <div className="p-4">
            <svg className="w-full overflow-visible p-2" {...gauge.getSVGProps()}>
                <defs>
                    <linearGradient
                        id="greenGradient"
                        x1="0%"
                        x2="100%"
                        y1="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stop-color="#4ade80"></stop>
                        <stop offset="100%" stop-color="#22c55e"></stop>
                    </linearGradient>
                    <linearGradient
                        id="yellowGradient"
                        x1="0%"
                        x2="100%"
                        y1="0%"
                        y2="100%"
                    >
                        <stop offset="0%" stop-color="#fde047"></stop>
                        <stop offset="100%" stop-color="#facc15"></stop>
                    </linearGradient>
                    <linearGradient id="redGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#f87171"></stop>
                        <stop offset="100%" stop-color="#ef4444"></stop>
                    </linearGradient>
                </defs>
                <g id="arcs">
                    <path
                        {...gauge.getArcProps({
                            offset: 0,
                            startAngle: START_ANGLE,
                            endAngle: END_ANGLE
                        })}
                        fill="none"
                        strokeWidth={12}
                        className="stroke-gray-200"
                    />
                    <path
                        {...gauge.getArcProps({
                            offset: -32,
                            startAngle: START_ANGLE,
                            endAngle: gauge.valueToAngle(value)
                        })}
                        strokeWidth={10}
                        fill="transparent"
                        stroke={arcStroke}
                    />
                </g>
                <g id="ticks">
                    {gauge.ticks.map((angle) => {
                        const asValue = gauge.angleToValue(angle);
                        const showText = asValue === 20 || asValue === 80 || asValue === 50;

                        return (
                            <line
                                className="stroke-gray-300"
                                strokeWidth={2}
                                {...gauge.getTickProps({ angle, length: showText ? 12 : 6 })}
                            />
                        );
                    })}
                </g>
                <g id="needle">
                    <circle className="fill-gray-300" {...base} r={24} />
                    <circle fill={gauge.needleColor} {...base} />
                    <circle fill={gauge.needleColor} {...tip} />
                    <polyline fill={gauge.needleColor} points={points} />
                    <circle className="fill-white" {...base} r={4} />
                </g>;
            </svg>
        </div>
    );
}




// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Gauge } from '@ant-design/plots';

// export const DemoGauge = () => {
//     const config = {
//         width: 200,
//         height: 200,
//         percent: 0.75,
//         range: {
//             ticks: [0, 1 / 3, 2 / 3, 1],
//             color: ['#F4664A', '#FAAD14', '#30BF78'],
//         },
//         indicator: {
//             pointer: {
//                 style: {
//                     stroke: '#D0D0D0',
//                 },
//             },
//             pin: {
//                 style: {
//                     stroke: '#D0D0D0',
//                 },
//             },
//         },
//         statistic: {
//             content: {
//                 style: {
//                     fontSize: '1rem',
//                     lineHeight: '1rem',
//                 },
//             },
//         },
//     };
//     return <Gauge {...config} />;
// };

