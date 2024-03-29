import React from 'react'
import './Inc.css'
import react, { useState } from 'react'

function Increment() {
    const [data, setData] = useState({
        number: 0
    });

    const minus = () => {
        if (data.number > 0) {
            setData({ number: data.number - 1 });
        }
    }

    return (
        <div className="arnav">
            <h1> React Web </h1>
            <h1>{data.number}</h1>

            <div className='mt-3'>
                <button onClick={minus} className='btn btn-info' > Decrement  </button>
                <button className='btn btn-info' id='inc' onClick={() => setData({ number: data.number + 1 })}> Increment </button>

            </div>
            <button className='btn btn-info' id='reset-btn' onClick={() => setData({ number: 0 })}> Reset  </button>
        </div>
    )
}

export default Increment