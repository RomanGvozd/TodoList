import React from "react";
import {useDispatch, useSelector} from "react-redux";

import './Header.scss';

function Header({openModal}) {
    const todos = useSelector((store) => store.list);
    const dispatch = useDispatch();

    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];

    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); 
    let year = today.getFullYear();
    
    let n = today.getDay();

    today = day + '/' + month + '/' + year;

    return (
        <header className='header'>
            <div className='wrapper-data'>
                <div>
                    <h1 className='logo'>{`${days[n]}, ${day}th`}</h1>
                    <h2 className='sub-logo'>{today}</h2>
                </div>
                <p className='number-tasks'>{todos.length} Tasks</p>
            </div>
            <button 
            className='add-todo'
            onClick={openModal}
            >+</button>
        </header>
    );
}

export default Header;
