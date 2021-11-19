//import React from 'react'
import "./ListUsers.css"
import {User} from '../User/User'


export const ListUsers = (props) => {
    
  let data = props.data
  return ( 
    <section className='list-users'>
      { data.map((value, index) => <User data={value} key={index}>{value.id}</User>) }
    </section>
  ) 
   
}
