import React, { useState, useEffect } from 'react'

export default function Ternarniy(props) {

    const [isForm, setForm] = useState(true);
    const [count, setCount] = useState(1);

    const changeForm = () => {
        setForm(isForm == false)
    };

    const countHandler = () => {
        setCount(count + 1)
    };

    useEffect(() => {
        console.log('How many changes has been done');
        return () => {
            setCount(count + 100)
        };
    }, [isForm])


    return (
        <div>
            {isForm ? (
                <form>
                    <label>
                        Name:
                        <br />
                        <input type="text" />
                    </label>
                </form>
            ) : null}
            <br />
            <button onClick={changeForm}>Show or Hide</button>
            <p>Counter: {count} </p>
            <button onClick={countHandler}>+1</button>
        </div>
    )
}

// export default { Ternarniy };
