import React from "react";

export default function About() {
  return (
    <section 
id="about"
style={{ background: "#7e57c2", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "60px" }}>
        <h1 style={{fontSize:'30px' , marginBottom:"30px"}}>ABOUT ME</h1>
      <div style={{ width: "600px" , fontSize:'20px', textAlign:"center", lineHeight:'26px'}}>
        I am 24 years old, a web developer based in Luziânia-Goiás. I have a passion for creating web pages and solving problems. I feel excited when presented with new challenges and I am always seeking to learn something new.
      </div>
    </section >

  )
}