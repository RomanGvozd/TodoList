import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {createItem} from "../../common/store/actions/actions";

import './Modal.scss';

function Modal({closeModal, setIsShow}) {

    const [value, setValue] = useState();

    const todos = useSelector((store) => store.list);
    const dispatch = useDispatch();
  
    const hadleChange = ({target}) => {
      setValue(target.value)
    };
  
    const createTodo = () => {
      dispatch(createItem(value));
      setIsShow(false)
    };

    return (
        <div className='modal-background'>
            <div className='modal'>
                <input 
                    type='text' 
                    placeholder='enter text...'
                    className='modal__input'
                    onChange={hadleChange}
                />
                <div className='modal__wrapper-btn'>
                    <button 
                        className='modal__submit' 
                        onClick={createTodo}
                    >
                        Add Todo
                    </button>
                    <button 
                        className='modal__delete'
                        onClick={closeModal}
                    >
                        Delete 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;