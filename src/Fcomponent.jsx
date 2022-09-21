import React, { useState } from 'react'

export default function Fcomponent() {
    const [value, setValue] = useState({
        count1: 3,
        count2: 5,
    });

    const increase1 = () => {
        setValue((prev) => ({ ...prev, count1: value.count1 + 3 }))
    }
    const increase2 = () => {
        setValue({ ...value, count2: value.count2 + 5 })
    }

    return (
        <div>
            <h1>useState, Fcomponent</h1>
            <h5>
                <span>count3:</span>
                {value.count1}
            </h5>
            <h5>
                <span>count5:</span>
                {value.count2}
            </h5>
            <button onClick={increase1}>+3</button>
            <button onClick={increase2}>+5</button>
        </div>
  )
}
