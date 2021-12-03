import React  from "react"

function BlogPost(props) {
  console.log(props)
  return (
    <section>
    <a href="#"><h3  className="titleLink">{props.posts.title}<h3 className="subLink">
    {props.posts.subTitle}</h3></h3></a>
    <h3 className="author">Posted by <a href="#">{props.posts.author}</a></h3>
    <h3 className="author"> on {props.posts.date}</h3>
    </section>
  )
}

export default BlogPost