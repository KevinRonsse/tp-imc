import { Form, Input, Button,Space, Col,Row } from 'antd'

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
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >

      <Row justify="left">
      <Col span={6}></Col>
      <h1>Connection</h1>
      <Col span={6}></Col>
    </Row>

      <Form.Item
        label="LastName"
        name="LastName"
        rules={[{ required: true, message: 'Please input your LastName!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item wrapperCol={{ offset: 9, span: 8 }}>
      <div className="space-align-container">
    <div className="space-align-block">
      <Space align="center">
        
        <Button type="primary">Validation</Button>
        <span className="mock-block">If you don't already have an account.</span>
       <span className="mock-block"><nav>Registration</nav></span>
      </Space>
    </div>
    </div>

       
      </Form.Item>
    </Form>
  );
};

export default Connexion;









