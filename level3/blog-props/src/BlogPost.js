import React  from "react"

function BlogPost(props) {
  // console.log(props)
  
  return (
    <section>
      <a href="index.html"><h3  className="titleLink">{props.posts.title}<br/><span className="subLink">
      {props.posts.subTitle}</span></h3></a>
      <h3 className="author">Posted by <a href="index.html">{props.posts.author}</a></h3>
      <h3 className="author"> on {props.posts.date}</h3>
    </section>
  )
}

export default BlogPost