import "./Select.css"

export const Select = (props) => {
   
    const selectRange = (e) =>{
        //console.log("selectRange")
        let index = e.target.options.selectedIndex
        let option = e.target.options
        props.changeRange(option[index].value)
    }
    
    return(
        <label>Количество отображаемых пользователей
            <select onChange={selectRange}>
                { props.rangeUsersOnPage.map(val => {
                    return <option key={val} value={val}>{val}</option>
                }) }
            </select>
        </label>
    )
    
}