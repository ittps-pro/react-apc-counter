/* eslint-disable no-param-reassign */


import {
  CopyOutlined,
  DeleteOutlined,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';


import { Demo } from './DemoSettings';

export const IconMap = {
  PlusOutlined,
  HeartOutlined,
  DeleteOutlined,
  CopyOutlined,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
};

export const initialValue = {
  copyIconProps: {
    show: true,
    Icon: 'CopyOutlined',
    tooltipText: 'Dublicate',
  },
  deleteIconProps: {
    show: true,
    Icon: 'DeleteOutlined',
    tooltipText: 'Delete',
  },
  creatorButtonProps: {
    show: true,
    creatorButtonText: 'Create',
    position: 'button',
    type: 'dashed',
    icon: 'PlusOutlined',
  },
};
export default Demo;
