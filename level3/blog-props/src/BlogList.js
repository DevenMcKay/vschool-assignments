import React from "react"
import BlogPost from "./BlogPost"
import BlogData from "./BlogData"

function BlogList(props) {
  const Posts = BlogData.map(item => <BlogPost key={item.title} posts={item}/>)
  // console.log(BlogData)
  return (
  <main>
    {Posts}
    <div className="olderPostsContainer">
      <a href="#" className="olderPosts">OLDER POSTS →</a>
    </div>
  </main>
  )
}

export default BlogList