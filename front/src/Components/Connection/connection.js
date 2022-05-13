/* eslint-disable no-template-curly-in-string */
import { DatePicker, Form, Input, Button} from "antd";

function Connection() {




// const User = {

//     labelCol: {
//         span: 8,
//     },
//     wrapperCol: {
//         span: 16,
//     },
// };

const ValidationMessage = {
    required: '${label.required!}',
    type: {
        firstName: '${firstName.required!}',
        lastName: '${lastName.required!}',
        dob: '${dateofbirthday.required!}',
        height: '${height.required!}',
        weight: '${weight.required!}',
    },
    number: {
        range: '${label} must be between ${min} and ${max}'
    },
};

const Validate = () => {
    const validation = (values) => {
        console.log(values);
    };

    const ValidateFailed = (errorInfo) => {
        console.log('failed:', errorInfo);
    };

    const dateFormatList = ['DD/MM/YYYY']



    return (
        <div>
        <Form name="" validation={Validate} ValidationMessage={ValidateFailed}>
        {/* <Form {...User} name="" validation={Validate} ValidationMessage={ValidateFailed}> */}
            <Form.Item
                name={['user', 'firstName']} label="firstName"
                rules={[
                    {
                        required: true, message: 'Please enter firstname!'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'lastName']} label="lastName"
                rules={[{
                    required: true, message: 'Please enter lastName'
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password" name="password"
                rules={[
                    {
                        required: true,
                        message: 'please input your password!'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <DatePicker defaultValue={dateFormatList} />
            {/* <DatePicker defaultValue={Moment('01/01/2015', dateFormatList[0])} format={dateFormatList} /> */}
            <Form.Item
                label="user" name="height"
                rules={[
                    {
                        required: true,
                        message: 'please enter  your height!'
                    }
                ]}
            >
                <Input />
                </Form.Item>
                <Form.Item
                label="user" name="weight"
                rules={[
                    {
                        required: true,
                        message: 'please input your weight !'
                    }
                ]}
            >
                <Input />
                </Form.Item>
        </Form>

        <Button onClick={ validation}>Validation</Button>
        <p> si vous possedez deja un compte</p>
        <link>connexion</link>
        </div>
        
        
      
    )

}
}

export default Connection;









