import { Form, input, Button, Checkbox } from 'antd'

export const Identifcation = () => {
    const Validation = (value) => {
        console.log('success', value);

    };

    const ValidationFailed = (errorInfo) => {
        console.log('failed', errorInfo);
    }

    return (
        <Form
            name=''
            labelcol={{
                span: 8,
            }}
            wrapperCol={{
                span:16,
            }}
            initialvalue={{
                remember: true,
            }}
            Validation={Validation}
            ValidationFailed={ValidationFailed}
            autoComplete="off"
            >

            <Form.Item
            label="Username"
            name="username"
            rules={{
                required: true,
                message:'Please input your username!'
            }}
            >
                <Input/>
                </Form.Item>
                <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>





        </Form>

    )
}
export default Identifcation;