import React from 'react'
//React components can read data from the Redux store using the useSelector 
//hook from the React-Redux library
import { useSelector } from 'react-redux'

export const PostsList = () => {
  //Read the state.posts value from the Redux store
  const posts = useSelector(state => state.posts)

  //Loop over the array of posts and show each of them on screen
  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}