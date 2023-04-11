import React, {useState} from "react";

const Counter = function(){
    const [count, setCount] = useState(0)

    function increment(){
        if (count < 10) {
            setCount(count + 1);
          }
    }

    function decrement(){
        if (count > 0) {
            setCount(count - 1);
          }
    }

    return (
        <div className="card__counter">
            <button className="card__down" onClick={decrement}>-</button>
            <div className="card__сount">{count}</div>
            <button className="card__up" onClick={increment}>+</button>
        </div>
    );
}

export default Counter;