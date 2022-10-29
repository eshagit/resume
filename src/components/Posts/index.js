import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  return (
    <section>
      <h3>{title}</h3>
      <article>
        {posts.map((post)=>{
          return(
            <Post key={post.id} {...post}/>
          );
        })}
      </article>
    </section>
  )
}

export default Posts
