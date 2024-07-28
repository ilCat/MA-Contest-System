import './styles.scss'
import { Button } from 'antd'
import {  Table  } from 'antd'
import {columns, data} from './data'
 
const LoadFile = () => (
  <div className='load-file-container'>
    <div className='load-file-container-header'>
    <Button type="primary">Import file</Button>
    <Button>Download Template</Button>
    </div>
    <div className='load-file-container-grid'>
    <Table columns={columns} dataSource={data} />
    </div>
  </div>
);

export default LoadFile



