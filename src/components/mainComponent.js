import React from 'react';
import { FirstComponent } from './firstComponet';
import { SecondComponent } from './secondComponent';
import "./styles/mainComponent.css"
import { ThiredComponent } from './thiredComponent';
import { useSpring } from "react-spring";
import { ScrollAnimations } from "./scrollAnimation";


export const MainComponent = () =>
{
    const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  // const [{scroll}, setScroll] = useSpring(() => ({ scroll : 0 }) )

  const FC = <FirstComponent />
  const SC = <SecondComponent />
  const TC = <ThiredComponent />

  const onScroll = React.useCallback(
    e => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) })
     ,
     []
     )


    return <div className="container" onScroll={onScroll} >
        <div style={{ position: 'relative', height: '1000vh', width: '100%', overflow: 'hidden' }} >
        <ScrollAnimations offset={scroll} pos={0} start={0} end={0.5} children={FC}  />
        <ScrollAnimations offset={scroll} pos={0.5} start={1} end={0.5} children={SC} />
        <ScrollAnimations offset={scroll} pos={1} start={0.5} end={1} children={TC} />
        {/* <ScrollAnimations offset={scroll} pos={1.5} start={1.5} end={2} children="sit" /> */}
    </div>
    </div>
}