import { memo, useCallback, useEffect, useState } from 'react';
import * as cls from './Header.module.scss';

type HeaderProps = {
    title: string;
    avatar?: string;
}

export const Header =memo(({title, avatar}: HeaderProps) => {
    const [isHide, setIsHide] = useState('')
   
    useEffect(() => {
        let lastScroll = 0;
        const defaultOffset = 10;
         
        const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;

        const onScroll = () => {
            const y = scrollPosition()
            if( y > defaultOffset) {
                setIsHide('hide');    
            }
            else if(y <= lastScroll){
                setIsHide('emergence');         
            }
         
            lastScroll = scrollPosition();
        }
        window.addEventListener('scroll', onScroll)
    }, [])

    return <div className={`${cls.Header} ${cls[isHide]}`}>
                <img alt='avatar' src={avatar} className={cls.img}/> 
                <span className={cls.title}>{title}</span>
            </div>
})