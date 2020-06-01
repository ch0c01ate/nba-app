import { SET_NEWS, ADD_NEWS, SET_POST } from '../actions/types';

export default function news(state, action) {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, news: action.news };

        case ADD_NEWS:
            return { ...state, news: [...state.news, action.news] };

        case SET_POST:
            return { ...state, news: action.news };

        default:
            return state;
    }
}