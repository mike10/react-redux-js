import React from "react";
import "./Pagination.css"

export const Pagination = (props) =>{
    
    const makePag = () => {
        let usersOnPage = props.usersOnPage
        let dataLength = props.dataLength
        let activePag = props.activePag
        
        let div = []

        let step = Math.ceil(dataLength/usersOnPage)
        if(step > 10){
            for(let i=0; i < step; i++){
                if(i > 2 && i < activePag-1 && i != step-3){
                    if(div[div.length-1] !== "..."){
                        div.push("...")
                    }
                    continue
                }
                if(i > activePag+1 && i < step-3 && i != 2){
                    if(div[div.length-1] !== "..."){
                        div.push("...")
                    }
                    continue
                }
                div.push(i)
            }
        }else{
            div = [...Array(step).keys()]
        }
        return div
    }

    const nextPag = (e) => {
        let num = e.target.innerText
        props.selectNumPag(num)
    }
    
return(  
    <div className="pagination" >{ 
        makePag().map((value, index )=> {
            if(value == props.activePag){
                return <div className="pagination__el pagination__el_active" key={index} onClick={nextPag}>{value+1}</div>
            }
            if(value == "..."){
                return <div className="pagination__el" key={index}>{value}</div>
            } 
            return <div className="pagination__el" key={index} onClick={nextPag}>{value+1}</div>
        })
    }</div>
    )
    
}