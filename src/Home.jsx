import React from 'react'
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    const addBtn = () => {
        dispatch({
            type: "increment"
        });
    }

    const subBtn = () => {
        dispatch({
            type: "decrement"
        });
    }

    const addBtnByVal = () => {
        dispatch({
            type: "incrementByValue",
            payload: 25
        });
    }

    return (
        <>

            <button onClick={addBtn}>Increment</button>
            <button onClick={addBtnByVal}>Increment by 25</button>
            <button onClick={subBtn}>Decrement</button>
        </>
    )
}

export default Home