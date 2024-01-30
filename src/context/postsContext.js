import { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/post/getposts.php', {
                    headers: { Authorization: `Bearer ${token}` },
                });
               
                const responseData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
                const { posts } = responseData;
                setPosts(posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const data = { posts };

    return (
        <PostContext.Provider value={data}>
            {children}
        </PostContext.Provider>
    );
}
