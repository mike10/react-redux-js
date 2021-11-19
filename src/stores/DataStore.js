import dataEvent from '../actions/DataEvent'
import dispatcher from '../dispatcher'
import { Store } from 'flux/utils'

class DataStore extends Store {
  
  constructor(dispatcher){
    super(dispatcher)

    this.mainData = {
      activePag: 0, //Выбранное число пагинации
      usersOnPage: 10, //число пользователей на странице
      data: [], //весь массив с пользователями
      outData: [] //массив с пользователями для экрана
    }
  }

  __onDispatch(payload) {
    switch(payload.type) {
      case 'load': this.getData(); break;
      case 'changeRange': this.selectRange(payload.value); break;
      case 'selectNumPag': this.selectNumPag(payload.value); break;
      default: console.log("unknown action of dispatcher")
    }
    dataEvent.emit('load');
    console.log("__onDispatc")
  }
  onDispatch(payload) {
    console.log("onDispatc")
  }

    async getData() {
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
            this.mainData.data = data
            this.selectRange(10)
            dataEvent.emit('load');
          } 
        }
        //console.log(data)
      }catch(err) {
        alert("Проблема с сетевым запросом "+err); // TypeError: failed to fetch
      }
  }
  
  selectRange(newUsersOnPage){
    console.log("selectRange" + newUsersOnPage)
    this.mainData = {
      activePag: 0,
      usersOnPage: newUsersOnPage,
      data: this.mainData.data,
      outData: this.mainData.data.slice(0, newUsersOnPage)
    }
  }

  selectNumPag(num){
    console.log("selectNumPag "+num)
    let newActivePag = Number(num-1)
    let usersOnPage = this.mainData.usersOnPage
    let newOutData = this.mainData.data.slice(newActivePag*usersOnPage, newActivePag*usersOnPage+usersOnPage)
    
    this.mainData.activePag = newActivePag
    this.mainData.outData = newOutData
    console.log(this.mainData)
  }

  getAllData = () => {
      return this.mainData
  }
   
}

let dataStore = new DataStore(dispatcher)
export default dataStore
