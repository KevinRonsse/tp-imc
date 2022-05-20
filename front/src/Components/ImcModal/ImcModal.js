import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ImcModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Message" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>identification successful </p>
      </Modal>
    </>
  );
};

export default ImcModal;