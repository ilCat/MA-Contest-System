import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const LoadCompetitor = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
   const dropDown1 = [<Select.Option value="demo0">Beginner</Select.Option>,<Select.Option value="demo1">Advance</Select.Option>,<Select.Option value="demo2">Expert</Select.Option>, <Select.Option value="demo3">Master</Select.Option>]
   const dropDown2 = [<Select.Option value="demo0">Kata</Select.Option>,<Select.Option value="demo1">Figth point</Select.Option>,<Select.Option value="demo2">MMA</Select.Option>]

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600, padding:'10px'}}
    >
      <Form.Item label="First Name">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input />
      </Form.Item>
      <Form.Item label="Experience">
        <Select>
          {dropDown1}
        </Select>
      </Form.Item>
      <Form.Item label="Age">
      <InputNumber min={3} max={99} step={1}/>
      </Form.Item>
      <Form.Item label="Weigth [Kg]">
      <InputNumber min={15} max={180} precision={2} />
      </Form.Item>
      <Form.Item label="Gender">
      <Radio.Group>
          <Radio.Button value="Male">Male</Radio.Button>
          <Radio.Button value="Female">Female</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Modalities">
        <Select>
          {dropDown2}
        </Select>
      </Form.Item>
      <Form.Item label="TopTen" valuePropName="topTen">
        <Switch />
      </Form.Item>
      <Form.Item >
        <Button>Save</Button>
      </Form.Item>
    </Form>
  );
};

export default LoadCompetitor;