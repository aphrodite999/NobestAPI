// assets
import { ChromeOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'query-page',
            title: 'お問い合わせ',
            type: 'item',
            url: '/query-page',
            icon: icons.ChromeOutlined
        }
    ]
};

export default support;
