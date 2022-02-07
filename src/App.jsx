import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './common/store/store';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';

import './App.scss';

function App() {

  const [isShow, setIsShow] = useState(false);

  const openModal  = () => {
    setIsShow(true)
  }

  const closeModal  = () => {
    setIsShow(false)
  }

  return (
    <Provider store={ store } >
      <main className='wrapper'>
        <Header openModal={openModal}/>
        <TodoList />
      </main>
      {isShow && (
        <Modal 
        closeModal={closeModal}
        setIsShow={setIsShow}
        />
      )}
    </Provider>
  );
}

export default App;
