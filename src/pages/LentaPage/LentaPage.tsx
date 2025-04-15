import { memo } from "react"
import { Post } from "./components/Post/Post"
import { LENTA_DATA } from "./mocks/lenta_data"
import * as cls from './LentaPage.module.scss';

export const LentaPage = memo(() => {
    return <div className={cls.LentaPage}>
                {LENTA_DATA.map(({ id, image, text, title, date }) => 
                    <Post key={id} title={title} text={text} date={date} image={image} />)}
            </div>
})