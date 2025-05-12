import React, { useContext } from 'react'
import { ThemeContext } from './contextAPI/context'



export default function About() {

  const {state, dispatch} = useContext(ThemeContext)


  return (
    <>
    
    <div>About</div>
    <h4>The current Theme is: {state.theme}</h4>
    <button className='btn btn-dark' onClick={()=> dispatch({type: 'USER_THEME'})}>Change Theme</button>

    </>
  )
}
