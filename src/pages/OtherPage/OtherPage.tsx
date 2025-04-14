import { memo } from "react"

type OtherPageProps = {
    title: string;
}

export const OtherPage = memo(({ title }: OtherPageProps) => {
    return <div>
                {title}
            </div>
})