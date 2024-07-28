import {
FileProtectOutlined,
ThunderboltOutlined
  } from '@ant-design/icons';
import PointFigth from './component/point-figth';
import GenericLoad from './component/generic-load';
export interface IModalityItems {
    title: string
    order: number
    icon?: any
    render?: any 
}
export const modalityItems: IModalityItems[] = [
    {title:'Point Figth',order: 1,icon: < ThunderboltOutlined/>,render:<PointFigth/>},
    {title:'Kata',order: 2,icon: <FileProtectOutlined />,render:<GenericLoad/>},
]