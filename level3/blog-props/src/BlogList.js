import React from "react"
import BlogPost from "./BlogPost"
import BlogData from "./BlogData"

function BlogList(props) {
  const Posts = BlogData.map((item, index) => <BlogPost key={item.author + " - " + index} posts={item}/>)
  // console.log(Posts)
  
  return (
  <main>
    {Posts}
    <div className="olderPostsContainer">
      <a href="index.html" className="olderPosts">OLDER POSTS →</a>
    </div>
  </main>
  )
}

export default BlogList