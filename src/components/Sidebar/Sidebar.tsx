import { memo } from 'react';
import { SidebarItem } from './components/SidebarItem/SidebarItem';
import Logo from './../../assets/icons/logo.svg';
import InfoIcon from './../../assets/icons/Info.svg';
import * as cls from './Sidebar.module.scss';

type SidebarProps = {
    list: any[]
}

export const Sidebar = memo(({list}: SidebarProps) => {
    return <div className={cls.Sidebar}>
                <div className={cls.logo}><Logo /></div>
                {list.map(({ title, icon, path }) => <SidebarItem key={title} title={title} Icon={icon} path={path} /> )}
                <div className={cls.info}>
                    <div className={cls.info_icon}><InfoIcon /></div>
                    <div className={cls.info_title}>О компании...</div>
                </div>
            </div>
})