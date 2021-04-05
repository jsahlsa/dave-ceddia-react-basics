import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

function Reddit() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const newPosts = res.data.data.children.map(obj => obj.data);
                setPosts(newPosts);
            });
    }, []);

    return (
        <div>
            <h1>/r/reactjs</h1>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>
                        <a href={post.url} target='_blank'>{post.title}</a></li>
                })}
            </ul>
        </div >
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Reddit />
    </React.StrictMode>,
    document.getElementById('root')
);

