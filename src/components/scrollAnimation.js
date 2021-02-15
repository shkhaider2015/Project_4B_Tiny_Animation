import { useState } from "react"
import { animated } from "react-spring"


const ScrollAnimations = ({ children, offset, pos, start, end }) =>
 {

    const [transform] = useState(() =>
      offset.interpolate({ range: [start, end], output: [100, 0], extrapolate: 'clamp' }).interpolate(s => {
        console.log("S : " + s)
        return `translate3d(${s}px,0,0)`
      }),
    )



    const [opacity] = useState(() => offset.interpolate([start, end], [0, 1]))
    return <animated.div style={{ position: 'absolute', left: 0, top: `${pos * 200}vh`, transform, opacity }}>
      {console.log("Opacity : " + opacity)}
      {children}
      </animated.div>
  }

  export {ScrollAnimations}