import React, { useReducer} from 'react';
import './style.css';

const Counter = () => {

  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action
    }),
    {
      count: 0,
    })

  const itemCountPlus = () => {
      dispatch({count: state.count + 1})
  }

  const itemCountMinus = () => {
    if(state.count > 0) {
      dispatch({count: state.count - 1})
    }
  }

  return (
    <table className='bar'>
      <tr>
        <td><button className='button bar' onClick={itemCountMinus}>-</button></td>
        <td id='num-count'>{state.count}</td>
        <td><button className='button bar' onClick={itemCountPlus}>+</button></td>
      </tr>
    </table>
  )
};

export default Counter;
