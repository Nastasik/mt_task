
import { LentaPage } from './../../pages/LentaPage/LentaPage';
import { OtherPage } from './../../pages/OtherPage/OtherPage';

export enum AppRoutes {
    LENTA = 'lenta',
    CHANNELS = 'channels',
    VIDEO = 'video',
    SAVED = 'saved',
    NOTIFICATIONS = 'notifications',
    CHATS = 'chats', 
}

export const routeConfig = {
    [AppRoutes.LENTA]: {
        path: '/',
        element: <LentaPage />,
    },
    [AppRoutes.CHANNELS]: {
        path: '/channels',
        element: <OtherPage title='channels' />,
    },
    [AppRoutes.VIDEO]: {
        path: '/video',
        element: <OtherPage title='video' />,
    },
    [AppRoutes.SAVED]: {
        path: '/saved',
        element: <OtherPage title='saved' />,
    },
    [AppRoutes.NOTIFICATIONS]: {
        path: '/notifications',
        element: <OtherPage title='notifications' />,
    },
    [AppRoutes.CHATS]: {
        path: 'chats',
        element: <OtherPage title='chats' />,
    },
};
