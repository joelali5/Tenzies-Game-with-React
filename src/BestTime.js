import React from 'react';

export default function BestTime(props) {
    return (
        <div className='stopWatch'>
            <h3 className='stopWatch-name'>Best Time:</h3>
            <h3 className="numbers">
                <span>{("0" + Math.floor((props.best / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((props.best / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((props.best / 10) % 100)).slice(-2)}</span>
            </h3>
        </div>
    )
}