import { FC } from 'react';

interface headProps {
    params: { cardId: string }
}

const head: FC<headProps> = ({ params: {cardId} }: headProps) => {
    return <>
        <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled'/>
        <title>The Band</title>
    </>
}

export default head