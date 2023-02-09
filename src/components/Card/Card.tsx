import React from 'react';

import './Card.scss';

import AddInput from "./AddInput";

const Card: React.FC = () => {
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