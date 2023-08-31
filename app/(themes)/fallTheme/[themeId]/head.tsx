import { FC } from 'react';

interface headProps {
    params: { themeId: string }
}

const head: FC<headProps> = ({ params: {themeId} }: headProps) => {
    return <> 
        <meta property="og:title" content="Apple Picking"/>
        <meta property="og:description" content="Immerse yourself in an enchanting digital invitation for an Apple Picking extravaganza! Experience a one-of-a-kind design as you traverse through a whimsical orchard landscape, adorned in the rich hues of autumn. Pluck your RSVP to confirm attendance. Join us for a celebration that blends nature's beauty with cutting-edge interactivity."/>
        <meta property="og:image" content="public\apple-picking.png"/>
        <meta property="og:url" content="https://www.lightvite.com/fallTheme/002"/>
        <meta property="og:type" content="website"></meta>
        <title>Apple Picking</title>
    </>
}

export default head