import { memo, useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { AppRouter } from './components/AppRouter/AppRouter';
import * as cls from './App.module.scss';

const SIDEBAR_ITEMS = [
    {
        icon: '',
        path: '/lenta',
        title: 'Лента',

    }, {
        icon: '',
        path: '/channels',
        title: 'Каналы'
    }, {
        icon: '',
        path: '/video',
        title: 'Видео'
    }, {
        icon: '',
        path: '/saved',
        title: 'Сохраненное'
    }, {
        icon: '',
        path: '/notifications',
        title: 'Уведомления'
    }, {
        icon: '',
        path: '/chats',
        title: 'Чаты'
    }
]
export const App = memo(() => {
    const [headerTitle, setHeaderTitle] = useState('лента')
    return <div className={cls.App}>
                <Sidebar list={SIDEBAR_ITEMS}/>
                <div>
                    <Header title={headerTitle}/>
                    <AppRouter />
                </div>
            </div>
})