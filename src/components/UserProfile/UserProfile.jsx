import React, {useEffect, useState} from "react";
import "./UserProfile.css"

export const UserProfile = (props) => {
    
    const [data, setData] = useState({})

    useEffect(() => {
        let url = new URL('https://dummyapi.io/data/v1/user/'+props.match.params.id);
        fetch(url, {headers: {
            "app-id": '61812ad9523754cd8285f9e7'
          }}).then(res => {
           return res.json();
         }).then(json => {
           
          setData(json)
        }).catch(err => {
            alert(err)
        })
       }, []);
    
    const createTree = (tree) => {
        let value = []
        for(let el in tree){
            if(el === "id"){
                value.push(<div className="profile__row" key={el}><div><img src={tree['picture']} alt="" /></div><div><span>{tree["id"]}</span></div></div>)
            } else if(el === "picture" || el === "firstName" || el === "lastName"){
               //Пропускаем эти поля!     
            }else if(el === "title"){
                value.push(<div className="profile__row" key={el}><div><strong>{tree["firstName"]} {tree["lastName"]}</strong></div></div>)
            }else if(typeof(tree[el]) === "object") {
               value.push(<div className="profile__row" key={el}><div><strong>{el}</strong></div></div>)
               value.push(createTree(tree[el]))
            } 
            else {
                value.push(<div className="profile__row" key={el}><div><strong>{el}</strong></div><div><span>{tree[el]}</span></div></div>)     
            }
        }
        return value
    }


    if(data){
        return(
            <div className="profile">
               { createTree(data) }
               <input className="profile__input" type="button" value="🢀" onClick={(e) => {
                    e.stopPropagation();
                    props.history.goBack()}} />
            </div>
        )
    }
    return(
        <div>
            <strong>Data is loading...</strong>
        </div>
    )   
    
}
