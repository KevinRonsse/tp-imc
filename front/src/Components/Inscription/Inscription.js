import { Form, Input, Button, DatePicker, Row, Col,Space } from 'antd';
import moment from 'moment';




const Inscription = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo ) => {
    console.log('Failed:', errorInfo);
  };
  const dateFormat = 'DD-MM-YYYY';

  

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
        <Col span={4}></Col>
        <h1>Inscription</h1>
        <Col span={4}></Col>
      </Row>



      <Form.Item
        label="FirstName"
        name="FirstName"
        rules={[{ required: true, message: 'Please input your firstname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="LastName"
        name="LastName"
        rules={[{ required: true, message: 'Please input your lastname!' }]}
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

      <Form.Item
        label="Date of Birthday"
        name="Date of birthday"
        rules={[{ required: true, message: 'Please input your date of birthday!' }]}
      >
        <DatePicker initialValues={moment('15/06/2015', dateFormat)} />
      </Form.Item>

      <Form.Item
        label="Height"
        name="Height"
        rules={[{ required: true, message: 'Please input your height!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Weight"
        name="Weight"
        rules={[{ required: true, message: 'Please input your weight!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 8 }}>

       
      
      <div className="space-align-container">
    <div className="space-align-block">
      <Space align="center">
        
        <Button type="primary">Validation</Button>
        <span className="mock-block">Si vous possedez deja un compte.</span>
      </Space>
    </div>
    </div>
      </Form.Item>



    </Form >

  );
};

export default Inscription;