import { memo } from "react"
import { Post } from "./components/Post/Post"
const LENTA_DATA = [{
    id: '6465',
    image: '#',
    text: 'text',
    title: 'title',
    date: 'date',
}]

export const LentaPage = memo(() => {
    return <div>
                {LENTA_DATA.map(({ id, image, text, title, date }) => 
                    <Post key={id} title={title} text={text} date={date} image={image} />)}
            </div>
})