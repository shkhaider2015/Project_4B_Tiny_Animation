import React from 'react'
import { useSpring, animated } from "react-spring";



export const UseSpringExample = () =>
{
    const myProps = useSpring({ opacity : 1, from : {opacity : 0} })

    return <animated.div style={myProps} >
        <h1>I will fade in</h1>
    </animated.div>
}
