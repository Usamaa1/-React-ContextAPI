import React, { useContext } from 'react'
import { ThemeContext } from './contextAPI/context'





export default function Home() {

  const {state, dispatch} = useContext(ThemeContext);

  function changeName (){

    return dispatch(
      {
        type: 'USER_CREDENTIALS',
        payload: {
          user:{
            name: 'Maha'
          }
        }
      }
    )
  }


  return (
    <>
    <div>Home</div>
    <h3>Welcome! {state.user.name}</h3>
    <h4>The current Theme is: {state.theme}</h4>
    <button className='btn btn-secondary' onClick={changeName}>Change Name</button>
   
    </>
  )
}
