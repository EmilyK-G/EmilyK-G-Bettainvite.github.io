import { FC } from 'react';

interface headProps {
    params: { themeId: string }
}

const head: FC<headProps> = ({ params: {themeId} }: headProps) => {
    return <>
        <title>The theme</title>
    </>
}

export default head