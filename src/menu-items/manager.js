// assets
import { AntDesignOutlined } from '@ant-design/icons';

// icons
const icons = {
    AntDesignOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const manager = {
    id: 'manager',
    title: 'Manager',
    type: 'group',
    children: [
        {
            id: 'manager_wheather',
            title: 'Wheather',
            type: 'item',
            url: '/manager_wheather',
            icon: icons.AntDesignOutlined
        }
    ]
};

export default manager;
