
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  activePag: 0, //Выбранное число пагинации
  usersOnPage: 10, //число пользователей на странице
  data: [], //весь массив с пользователями
  outData: [] //массив с пользователями для экрана
}

function playlist(state = initialState, action) {
  if (action.type === 'CHANGE_PAG_NUM') {
    let num = Number(action.payload) - 1
    return {
      activePag: num,
      usersOnPage: state.usersOnPage,
      data: state.data,
      outData: state.data.slice(num*state.usersOnPage, num*state.usersOnPage+state.usersOnPage)
    }
  }
  if (action.type === 'CHANGE_SELECT_NUM') {
    console.log(action.payload)
    return {
      activePag: state.activePag,
      usersOnPage: Number(action.payload),
      data: state.data,
      outData: state.data.slice(0, action.payload)
    }
  }
  if (action.type === 'FETCH_DATA_SUCCESS') {
    return {
      activePag: state.activePag,
      usersOnPage: state.usersOnPage,
      data: action.payload,
      outData: action.payload.slice(0, state.usersOnPage)
    }
  }
  return state;
}

const store = createStore(playlist, composeWithDevTools(applyMiddleware(thunk)));

export default store
