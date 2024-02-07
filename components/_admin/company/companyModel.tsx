"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { Form, Input } from "antd";
import UploadFile from "./uploadFile";
import TextArea from "antd/es/input/TextArea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface IModelCompanyProps {
  isOpenCompanyModel: boolean;
  handleCompanyModel: () => void;
}

const CompanyModel: React.FC<IModelCompanyProps> = (props: any) => {
  const [value, setValue] = useState("");
  
  function handleChange(content:any, delta:any, source:any, editor:any) {
    setValue(editor.getContents());

  }
  const [form] = Form.useForm();

  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Company"
        centered
        open={props.isOpenCompanyModel}
        onOk={() => props.handleCompanyModel()}
        onCancel={() => props.handleCompanyModel()}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <div className="flex justify-between">
            <Form.Item name="logo" label="Logo" rules={[{ required: true }]}>
              <UploadFile />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
            </Form.Item>
          </div>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: false }]}
          >
            <ReactQuill theme="snow" value={value} onChange={handleChange} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CompanyModel;