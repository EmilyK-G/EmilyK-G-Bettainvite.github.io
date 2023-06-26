import { FC } from 'react';

interface headProps {
    params: { cardId: string }
}

const head: FC<headProps> = ({ params: {cardId} }: headProps) => {
    return <>
        <title>The Band</title>
        <meta httpEquiv='ScreenOrientation' content='autoRotate:disabled'/>
    </>
}

export default head