import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import { connect } from 'react-redux'
//import { useSelector, useDispatch } from 'react-redux'
import { ListUsers } from '../ListUsers/ListUsers'
import { Footer } from '../Footer/Footer'
import { Pagination } from '../Pagination/Pagination'
import { Select } from '../Select/Select'
import { ChoseTheme } from '../ChoseTheme/ChoseTheme'
import { MyMenu } from "../MyMenu/MyMenu"
import {loadData} from "../../features/LoadData"


function Gallery(props) {
  
  //let data = []  
  //const data = useSelector((state) => state.todo)
  //const dispatch = useDispatch()
  
  /*const [state, setState] = useState({
    activePag: 0, //Выбранное число пагинации
    usersOnPage: 10, //число пользователей на странице
    data: [], //весь массив с пользователями
    outData: [] //массив с пользователями для экрана
  });*/
 
  console.log("В галерее")
  console.log(props)

  useEffect(() => {
    
    props.onLoadData()
     
  }, []);


  
  function selectRange(data){
    //setState({...data})
    console.log("selectRange")
  }

  const selectNumPag = (num) => {
    //invokeSelectNumPag(num)
    console.log(num)
  }
   
  const changeRange = (num) => {
    //invokeChangeRange(num)
  } 


        

  if(props.outData){
    return (
      <section>
         <header>
            <h1 className="h1">Пользователи</h1>
            <MyMenu/>
          </header>
            <ListUsers data={ props.outData }/> 
          <Footer>
            <Pagination usersOnPage={props.usersOnPage} dataLength={props.data.length} activePag={props.activePag} selectNumPag={props.onChangePagNum}/>
            <Select changeRange={props.onChangeSelect} rangeUsersOnPage={[10, 20, 40, 50, 5]}/> 
            <ChoseTheme/>
          </Footer>         
      </section>
    )
  }
  
  return (
    <section>
      <headers>
        <h1>No data {props}</h1>
      </headers>
    </section>
  )
    
}

export default connect(
  
  state => ({
    activePag: state.activePag, //Выбранное число пагинации
    usersOnPage: state.usersOnPage, //число пользователей на странице
    data: state.data, //весь массив с пользователями
    outData: state.outData //массив с пользователями для экрана
  }),
  dispatch => ({
    onChangePagNum:(num) => {
      dispatch({ type: 'CHANGE_PAG_NUM', payload: num })
    },
    onChangeSelect:(num) => {
      console.log("onChangeSelect "+num)
      dispatch({ type: 'CHANGE_SELECT_NUM', payload: num })
    },
    onLoadData:() => {
      dispatch(loadData())
    }
  })
)(Gallery);


