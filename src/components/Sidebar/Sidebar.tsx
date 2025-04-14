import { memo } from 'react';
import { SidebarItem } from './components/SidebarItem/SidebarItem';
import * as cls from './Sidebar.module.scss';

type SidebarProps = {
    list: any[]
}

export const Sidebar = memo(({list}: SidebarProps) => {
    return <div className={cls.Sidebar}>
                {list.map(({ title, icon, path }) => <SidebarItem key={title} title={title} Icon={icon} path={path} /> )}
            </div>
})