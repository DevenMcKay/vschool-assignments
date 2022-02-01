import React from "react"

function Contact() {
  return(
    <main className="contact-page">
      <h1>Contact</h1>
      <section className="contact-container">
        <form>
          <input type="text" placeholder="Full Name"></input>
          <input type="phone" placeholder="Phone"></input>
          <input type="email" placeholder="E-mail"></input>
          <textarea placeholder="More Info"></textarea>
        </form>
        </section>
    </main>
  )
}

export default Contact