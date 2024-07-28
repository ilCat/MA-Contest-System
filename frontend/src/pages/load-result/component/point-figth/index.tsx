import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card} from 'antd';


const { Meta } = Card;

const PointFigth = ()=>{
    return( <Card
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
</Card>)}

export default PointFigth   