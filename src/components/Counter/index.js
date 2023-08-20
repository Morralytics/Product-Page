import React, { useReducer, useState } from 'react';

const Counter = () => {

  const [counter, setCounter] = useReducer(
    (state, action) => ({
      ...state,
      ...action
    }),
    {
      count: 0,
    })

  const itemCountPlus = () => {
    let currentCounter = counter
    setCounter(currentCounter++)
  }

  const itemCountMinus = () => {

  }

  return (
    <table>
      <tr>
        <td>-</td>
        <td>{counter}</td>
        <td onClick={itemCountPlus}>+</td>
      </tr>
    </table>
  )
};

export default Counter;
