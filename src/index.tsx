import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.scss';

import CardContainer from "./containers/CardContainer/CardContainer";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
//Отбежал ибо дела, мб сегодня закончу

root.render(
    <>
        <CardContainer/>
    </>
)

