import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => ({
    root:{
      
    },
    
}))

const posts = [
    {
        id:1, 
        author:{
            id: 1,
            name:'Wleydson Lemos',
            username: 'wleydson.lemos',
            avatar: '/images/avatars/avatar.png'
        },
        title: 'Javão',
        date: 'April 7, 2020',
        description: 'Isso é um texto muito foda sobre o java',
        hashtags: '#java',
        image:'/images/posts/post2.png'
    },
    {
        id:1, 
        author:{
            id: 1,
            name:'Wleydson Lemos',
            username: 'wleydson.lemos',
            avatar: '/images/avatars/avatar.png'
        },
        title: 'O porder do Spring',
        date: 'April 7, 2020',
        description: 'Isso é um texto muito foda sobre o java',
        hashtags: '#java #spring',
        image:'/images/posts/post8.png'
    },
]

function Feed(){
    const classes = useStyles();

    return (
        <div>
            {
                posts.map(post =>(
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Feed;