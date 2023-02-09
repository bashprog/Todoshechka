import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.scss';

import CardContainer from "./containers/CardContainer/CardContainer";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
//Время 13:38, надо отлучиться сорри на спидран писанины не будет похоже

root.render(
    <>
        <CardContainer/>
    </>
)

