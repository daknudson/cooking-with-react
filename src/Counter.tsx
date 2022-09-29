import React, { useState, useContext } from 'react';
import {ThemeContext} from './App'
type initialCountProps ={
    initialCount: number
}

const Counter = ({initialCount}: initialCountProps) => {
const style = useContext(ThemeContext)

    const [number, setNumber] = useState<number>(initialCount)
    return (
        <div>
            <button onClick={() => setNumber(number + 1)} style={style}>+</button>
            <span>{number}</span>
            <button onClick={() => setNumber(number - 1)} style={style}>-</button>
        </div>
    )
}

export default Counter