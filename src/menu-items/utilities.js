// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'picture',
            title: 'Picture',
            type: 'item',
            url: '/picture',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'wheather',
            title: 'Wheather',
            type: 'item',
            url: '/wheather',
            icon: icons.AntDesignOutlined
        }
    ]
};

export default utilities;
