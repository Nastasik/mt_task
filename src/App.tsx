import { memo, useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { AppRouter } from './components/AppRouter/AppRouter';
import UnionIcon from './assets/icons/Union.svg';
import CompassIcon from './assets/icons/Compass.svg';
import BellIcon from './assets/icons/Bell.svg';
import BookmarkIcon from './assets/icons/Bookmark.svg';
import ChatIcon from './assets/icons/Chat.svg';
import VideoIcon from './assets/icons/Video.svg';
import Avatar from './assets/avatar.png';
import * as cls from './App.module.scss';

const SIDEBAR_ITEMS = [
    {
        icon: UnionIcon,
        path: '/lenta',
        title: 'Лента',

    }, {
        icon: CompassIcon,
        path: '/channels',
        title: 'Каналы'
    }, {
        icon: VideoIcon,
        path: '/video',
        title: 'Видео'
    }, {
        icon: BookmarkIcon,
        path: '/saved',
        title: 'Сохраненное'
    }, {
        icon: BellIcon,
        path: '/notifications',
        title: 'Уведомления'
    }, {
        icon: ChatIcon,
        path: '/chats',
        title: 'Чаты'
    }
]
export const App = memo(() => {
    const [headerTitle, setHeaderTitle] = useState('лента')
    return <div className={cls.App}>
                <Sidebar list={SIDEBAR_ITEMS}/>
                <div className={cls.wrapper} >
                    <Header title={headerTitle} avatar={Avatar}/>
                    <AppRouter />
                </div>
            </div>
})