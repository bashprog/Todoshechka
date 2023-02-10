import React from 'react';

import {useCardStore} from "../../containers/CardContainer/store";

interface item {
    id: string,
    title: string,
    status: 'clear' | 'done' | 'canceled',
}

const Item: React.FC<{item: item}> = ({item}) => {
    const {changeStatus} = useCardStore();

    return(
        <div className={`item ${item.status}`}>
            <div className="checkbox" onClick={() => {changeStatus(item.id)}}>
                <div className={`circle`}>
                    {item.status == 'done' ? '✓' : null}
                    {item.status == 'canceled' ? '✖' : null}
                </div>
            </div>
            <span>{item.title}</span>
        </div>
    )
};

export default Item;