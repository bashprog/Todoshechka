import React from 'react';

import './Card.scss';

import AddInput from "./AddInput";

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

const Card: React.FC<IProps> = ({items, changeStatus, deleteItem}) => {
    return(
        <>
            <div className="container">
                <div className="flex w100 center">
                    <div className="desk">
                        <AddInput/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;