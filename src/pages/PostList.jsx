import React from 'react'
import PostItem from './PostItem'
import styles from './PostList.module.css'

const posts = [
    {
        title: 'abcabcabcabcabcabcabca',
        date: '17:00:00',
        desc: 'abcabcabaasdadasdasdasdasdadasdasdasdasadasdsa',
        tags: ['#qwe', '#asd', '#ghh']
    },
    {
        title: 'abcabcabcabcabcabcabca2',
        date: '17:00:00',
        desc: 'abcabcabaasdadasdasdasdasdadasdasdasdasadasdsa',
        tags: ['#qwe', '#123', '#rtf']
    },
    {
        title: 'abcabcabcabcabcabcabca3',
        date: '17:00:00',
        desc: 'abcabcabaasdadasdasdasdasdadasdasdasdasadasdsa',
        tags: ['#qwe', '#tyu', '#jkj']
    },
]

const PostList = () => {
  return (
    <div className={styles.postList}>
        {posts.map(post => (
            <PostItem title={post.title} date={post.date} desc={post.desc} tags={post.tags} />
        ))}
    </div>
  )
}

export default PostList