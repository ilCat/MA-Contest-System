import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Table } from 'antd';
import {data, columns} from './data'

const { Meta } = Card;

const TeamDetail = () => (
    <div className=''>
  <Card
    style={{ width: 400 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting"  />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Team"
      description="This is the description"
    />
  </Card>

<Table columns={columns} dataSource={data} />
</div>
)

export default TeamDetail