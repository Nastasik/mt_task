import { memo } from 'react';
import * as cls from './Post.module.scss';

type PostProps = {
  image: string,
  title: string, 
  text: string, 
  date: string, 
}
export const Post =memo(({ title, text, date, image }: PostProps) => {
    return <div className={cls.Post}>
              <img alt='' src={image} className={cls.img}/> 
              <div>
                <span className={cls.title}>{title}</span>
                <span className={cls.date}>{date}</span>
              </div>
              <span className={cls.text}>{text}</span>
              <hr className={cls.hr}/>
            </div>
})