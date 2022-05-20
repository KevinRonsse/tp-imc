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
        label="date of birthday"
        name="Date of birthday"
        rules={[{ required: true, message: 'Please input your date of birthday!' }]}
      >
        <DatePicker defaultValue={moment('', dateFormat)} />
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

       
      
        <Space align="center">
        <Button type="primary" htmlType="submit">
          Validation 
        </Button> 
        <p>Si vous possedez un compte.</p>

        </Space>
      </Form.Item>



    </Form >

  );
};

export default Inscription;