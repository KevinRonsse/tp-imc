import { Form, Input, Button } from 'antd'

const Connexion = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="FirtsName"
        name="FirstName"
        rules={[{ required: true, message: 'Please input your FirstName!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="LasttsName"
        name="LastName"
        rules={[{ required: true, message: 'Please input your LastName!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button> 
        <p>Si vous possedez un compte ?</p>
       

       
      </Form.Item>
    </Form>
  );
};

export default Connexion;









