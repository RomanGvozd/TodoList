import { ACTION_ADD, ACTION_DELETE, ACTION_SUBMIT } from "../actions/actions";

const INITIAL_STATE = {
    list: [
        // {
        //     id: 0,
        //     title: "New Item",
        //     time: 1,
        //     isDone: false

        // }
    ]
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    const list = state.list.sort((a, b) => a.id - b.id)

    let dat = new Date();
    let hour=dat.getHours();
    let min= String(dat.getMinutes() + 1).padStart(2, '0');
    let sec=dat.getSeconds();

    let tim =hour+':'+min;
    // +tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds()

    switch (type) {
        case ACTION_ADD:
            return { ...state, list: [...list, { id: Date.now(), title: payload, isDone: false, time: tim }] }
        case ACTION_DELETE:
            return { ...state, list: list.filter(el => el.id !== payload ? true : false) };
        case ACTION_SUBMIT:
            return { ...state, list: list.map(el => el.id === payload.id ? { ...el, isDone: payload.isDone } : el) };
        default:
            return state;
    }
}