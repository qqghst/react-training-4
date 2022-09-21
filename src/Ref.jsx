import React, { useRef, useEffect } from 'react'

export default function Ref() {
    const nameRef = useRef();
    const phoneRef = useRef();
    const agreeRef = useRef();

    useEffect(() => {
        console.log(nameRef);
        console.log(nameRef.current);
    })

    return (
        <div>
            <form>
                <label>
                    Name:
                    <br />
                    <input type="text" ref={nameRef} />
                </label>
                <br />
                <label>
                    Phone:
                    <br />
                    <input type="text" ref={phoneRef} />
                </label>
                <br />
                <label>
                    Agree:
                    <br />
                    <input type="checkbox" ref={agreeRef} />
                </label>
            </form>
            <button onClick={() => { nameRef.current.focus() }}>nameRef</button>
            <button onClick={() => { phoneRef.current.style.background = 'red' }}>phoneRef</button>
            <button onClick={() => { agreeRef.current.checked = true}}>agreeRef</button>
        </div>
    )
}
