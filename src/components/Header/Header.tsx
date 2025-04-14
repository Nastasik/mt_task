import { memo } from 'react';
import * as cls from './Header.module.scss';

type HeaderProps = {
    title: string;
    avatar?: string;
}

export const Header =memo(({title, avatar}: HeaderProps) => {
    return <div className={cls.Header}>
                <img alt='avatar' src={avatar} className={cls.img}/> 
                <span className={cls.title}>{title}</span>
            </div>
})