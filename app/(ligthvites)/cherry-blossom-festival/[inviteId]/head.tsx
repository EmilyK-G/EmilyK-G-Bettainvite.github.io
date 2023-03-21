import { FC } from 'react';

interface headProps {
    params: { inviteId: string }
}

const head: FC<headProps> = ({ params: {inviteId} }: headProps) => {
    return <>
        <title>Cherry Blossom Festival</title>
    </>
}

export default head