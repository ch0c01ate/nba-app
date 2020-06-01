import { SET_NEWS, ADD_NEWS, SET_POST } from "./types"

const setNews = (news) => ({ type: SET_NEWS, news });

const addNews = (news) => ({ type: ADD_NEWS, news });

const setPost = (news) => ({ type: SET_POST, news })

export { setNews, addNews, setPost };