import { FC } from 'react';

interface headProps {
    params: { inviteId: string }
}

const head: FC<headProps> = ({ params: {inviteId} }: headProps) => {
    return <>
        <title>Fiesta para los Ancianos</title>
    </>
}

export default head