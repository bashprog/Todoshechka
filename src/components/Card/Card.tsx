import React from 'react';

import './Card.scss';

interface item {
    id: string,
    title: string,
    status: 'clear' | 'done' | 'canceled',
}

interface IProps {
    items: item[],
    addItem: (title: string) => void,
    deleteItem: (id: string) => void,
    changeStatus: (id: string) => void,
}

const Card: React.FC<IProps> = ({items, addItem, changeStatus, deleteItem}) => {
    return(
        <>
            <h1 onClick={() => addItem('123')}>CARD</h1>
            <h2 onClick={() => deleteItem(items[0].id)}>Delete first card</h2>
            <h2 onClick={() => changeStatus(items[0].id)}>ChangeStatus on first card</h2>
        </>
    )
};

export default Card;