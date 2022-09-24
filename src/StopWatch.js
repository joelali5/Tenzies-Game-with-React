import React from 'react';

export default function StopWatch(props) {
    return (
        <div className='stopWatch'>
            <h3 className='stopWatch-name'>Timer:</h3>
            <h3 className="numbers">
                <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
            </h3>
        </div>
    )
}