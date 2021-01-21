import React from 'react';
import { FirstComponent } from './firstComponet';
import { SecondComponent } from './secondComponent';
import "./styles/mainComponent.css"
import { ThiredComponent } from './thiredComponent';


export const MainComponent = () =>
{
    return <div>
        <FirstComponent />
        <SecondComponent />
        <ThiredComponent />
    </div>
}