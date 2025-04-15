import { memo } from 'react';
import { Link, NavLink, NavLinkRenderProps } from 'react-router-dom';
import * as cls from './SidebarItem.module.scss';

type SidebarItemProps = {
    title: string;
    path: string;
    Icon?: any//React.VFC<React.SVGProps<SVGElement>>
    newPostCount?: number;
}

export const SidebarItem =memo(({ title, Icon, path, newPostCount }: SidebarItemProps) => {
    const activeStyle = ({ isActive }: NavLinkRenderProps) => ({
        fontWeight: isActive ? 700 : 500,
    });
    return (<NavLink to={path} style={activeStyle} className={cls.SidebarItem}>
                <div className={cls.icon}><Icon /></div>
                <span className={cls.title}>{title}</span>
                {newPostCount ? <span className={cls.newPostCount}>{newPostCount}</span> : null}
            </NavLink>)
})