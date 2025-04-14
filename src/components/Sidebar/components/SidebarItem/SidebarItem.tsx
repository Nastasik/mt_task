import { memo } from 'react';
import { Link } from 'react-router-dom';
import * as cls from './SidebarItem.module.scss';

type SidebarItemProps = {
    title: string;
    path: string;
    Icon?: any//React.VFC<React.SVGProps<SVGElement>>
}

export const SidebarItem =memo(({ title, Icon, path }: SidebarItemProps) => {
    return (<Link to={path} className={cls.SidebarItem}>
                <div className={cls.icon}><Icon /></div>

                <span className={cls.title}>{title}</span>
            </Link>)
})