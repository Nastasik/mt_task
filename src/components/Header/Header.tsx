import { memo } from 'react';
import * as cls from './Header.module.scss';

type HeaderProps = {
    title: string;
}

export const Header =memo(({title}: HeaderProps) => {
    return <div className={cls.Header}>
                {/* <img alt='' src='' className={cls.img}/>  */}
                <span className={cls.title}>{title}</span>
            </div>
})