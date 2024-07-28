
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Table } from 'antd';
import {data, columns} from './data'

const GenericLoad = () =>{
    return (
    <div className="generic-load-container">
    <Table columns={columns} dataSource={data} />
    </div>)
}
export default GenericLoad