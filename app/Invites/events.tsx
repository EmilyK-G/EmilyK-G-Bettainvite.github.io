import React, {useEffect} from 'react'

const eventsList = [
    {
        eventId:'001',
        name: 'cherry-blossom-festival',
        theme: 'cherryblossom'
    },
    {
        eventId:'002',
        name: 'fallTheme',
        theme: 'fall'
    },
    {
        eventId:'003',
        name: 'lavenderTheme',
        theme: 'lavander'
    },
    {
        eventId:'004',
        name: 'delicateTheme',
        theme: 'delicate'
    },
    {
        eventId:'005',
        name: 'defaultTheme',
        theme: 'default'
    }
]

const events = () => {
    
    useEffect(() => {
        eventsList.map((eve)=>{
            console.log(eve)
        })
    }, [])
    
  return (
    <div>events</div>
  )
}

export {eventsList}