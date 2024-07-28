import type { TableProps } from 'antd'
import {
EditFilled,
DeleteOutlined
} from '@ant-design/icons';
import { Space, Table, Tag } from 'antd'

interface DataType {
    key: string;
    name: string;
    age: number;
    weigth: number;
    modalities:string[];
    category: string;

  }
  
export const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    //   render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Weigth',
      dataIndex: 'weigth',
      key: 'weigth',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Modalities',
      key: 'modalities',
      dataIndex: 'modalities',
      render: (_, { modalities }) => (
        <>
          {modalities.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{display:'flex', flexDirection: 'row' ,gap:'5px'}}>
          <EditFilled/>
          <DeleteOutlined/>
        </div>
      ),
    },
  ];
  
export  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      weigth: 12,
      category: 'Advance',
      modalities: ['Kata', 'Point Figth'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      weigth:45,
      category: 'Expert',
      modalities: ['Kata', 'Point Figth'],
      
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      weigth: 78,
      category: 'Beginer',
      modalities: ['Kata', 'Point Figth'],
      
    },
  ];
  
  