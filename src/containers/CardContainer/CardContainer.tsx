import React from 'react';
import Card from "../../components/Card/Card";

import {useCardStore} from "./store";

const CardContainer: React.FC = () => {
    const {items, addItem, deleteItem, changeStatus} = useCardStore();
    return <Card items={items} addItem={addItem} deleteItem={deleteItem} changeStatus={changeStatus}/>
}

export default CardContainer;