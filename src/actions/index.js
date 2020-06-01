import { setNews, addNews, setPost } from './creators';

const fetchNews = () => (dispatch) => {
    fetch('news').then(resp => {
        return resp.json();
    }).then(body => {
        dispatch(setNews(body));
    })
}

const createNews = (title, image) => (dispatch) => {
    const newPost = { title: title, image: image, isLiked: false };

    fetch('news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost),
    })
        .then((e) => e.json())
        .then(savedPost => {
            dispatch(addNews(savedPost));
        })
}

const fetchPost = (id) => (dispatch) => {
    fetch(id).then((e) => e.json())
        .then(body => {
            dispatch(setPost(body));
        })
}

export { fetchNews, createNews, fetchPost }