import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import Tasks from './components/tasks/Tasks';
import Mainpages from './Pages';
import {Provider, useDispatch} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {userReducer} from './store/userReducer'
import * as TaskActions from './store/userActions'

const rootReducer = combineReducers({
  tasks: userReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))



function App() {

  // useEffect( async() => {
  //   useDispatch(TaskActions.fetchUser())
  //  },[])
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <div className='body'>
            <Sidebar />
            <Mainpages />
          </div>
          
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
