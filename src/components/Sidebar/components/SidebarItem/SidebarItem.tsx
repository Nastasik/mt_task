import { memo } from 'react';
import { Link } from 'react-router-dom';
import * as cls from './SidebarItem.module.scss';

type SidebarItemProps = {
    title: string;
    path: string;
    Icon?: any//React.VFC<React.SVGProps<SVGElement>>
    newPostCount?: number;
}

export const SidebarItem =memo(({ title, Icon, path, newPostCount }: SidebarItemProps) => {
    return (<Link to={path} className={cls.SidebarItem}>
                <div className={cls.icon}><Icon /></div>
                <span className={cls.title}>{title}</span>
                {newPostCount ? <span className={cls.newPostCount}>{newPostCount}</span> : null}
            </Link>)
})