import React, { useReducer} from 'react';

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
    <table>
      <tr>
        <td><button onClick={itemCountMinus}>-</button></td>
        <td>{state.count}</td>
        <td><button onClick={itemCountPlus}>+</button></td>
      </tr>
    </table>
  )
};

export default Counter;
