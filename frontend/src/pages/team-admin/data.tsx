import LoadCompetitor from './components/load-competitor'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import LoadFile from './components/load-file';
export interface ITeamItems {
    title: string
    order: number
    icon?: any
    render?: any 
}
export const teamItems: ITeamItems[] = [
    {title:'Load Competitor',order: 1,icon: <UserOutlined />,render:<LoadCompetitor/>},
    {title:'Team Detail',order: 2,icon: <DesktopOutlined />,render:<></>},
    {title:'Competitor List',order: 3,icon: <TeamOutlined  />,render:<></>},
    {title:'Load file',order: 4,icon: <FileOutlined />,render:<LoadFile/>},
]