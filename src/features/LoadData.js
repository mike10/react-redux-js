
export const loadData = () => async dispatch => {
    let data = []
    let answer1, json1, answer2, json2
    try{
        answer1 = await fetch("https://dummyapi.io/data/v1/user?page=0&limit=50", { headers: { "app-id": '61812ad9523754cd8285f9e7' } })
        answer2 = await fetch("https://dummyapi.io/data/v1/user?page=1&limit=50", { headers: { "app-id": '61812ad9523754cd8285f9e7' } })
        if (answer1.ok) { 
            json1 = await answer1.json();
            if (answer2.ok) { 
                json2 = await answer2.json();
                data = json1.data.concat(json2.data)
                dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data })
            } 
        }
    } catch(err) {
        alert("Проблема с сетевым запросом "+err); 
    }
}