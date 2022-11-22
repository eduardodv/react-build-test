import './styles.css'
import { PostCard } from '../PostCard'

export  const Posts = ({ posts }) => (
  <div className="posts">
    {/* { posts.map(post => <h1 key={post.id}>{ post.title }</h1>) } */}
    { posts.map(post => (
      <PostCard post={post} key={ post.id } />
    )) }
  </div>
)