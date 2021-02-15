import React from 'react'
import { FirstComponent } from './firstComponet'
import { SecondComponent } from './secondComponent'
import * as Scroll from 'react-scroll'


export const ReactScrollExample = () =>
{
    const scroll = Scroll.animateScroll;
    scroll.scrollTo(300);

    return <>
    <FirstComponent />
    <SecondComponent />
    </>
}