import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import projectsStyle from "../styles/projects.scss"

const IndexPage = () => {


  return (
      <Layout>
          <SEO title="Home" />


          <div class="card"><Link to="/project/iui/">
            <div class="ptitle">Level Design with Intelligent User Interface in Unity</div>
            <hr></hr>
            <img src="https://res.cloudinary.com/chiv/image/upload/v1570478668/projects/ui%20-%20splash/iuisplash_vm5caf.jpg" alt="Avatar"></img>
            <div class="overlay">Create or edit properties of custom objects in Unity, using speech commands (NLP) and pointing with your finger.</div>
          </Link></div>

          <div class="card"><Link to="/project/gatsby/">
            <div class="ptitle"><b>Website Design with Gatsby</b></div>
            <hr></hr>
            <img src="https://res.cloudinary.com/chiv/image/upload/v1570478670/projects/ui%20-%20splash/all2_usnuoz.jpg" alt="splashgatsby" alt="Avatar"></img>
            <div class="overlay">This website is designed with Gatsby, React, GraphQL, HTML, SASS, Cloudinary</div>
          </Link></div>

          <div class="card"><Link to="/project/operator/">
            <div class="ptitle"><b>Leap Motion Operator</b></div>
            <hr></hr>
            <img src="https://res.cloudinary.com/chiv/image/upload/v1570478671/projects/ui%20-%20splash/operatorsplash2_tgogpz.jpg" alt="Avatar"></img>
            <div class="overlay">Control vehicles with hand gestures.</div>
          </Link></div>



      </Layout>
  )
}
/*
<projectBox> <Link to="/project/iui/">
<h2>Level Design with Intelligent User Interface in Unity</h2>
<img src="https://res.cloudinary.com/chiv/image/upload/v1570478668/projects/ui%20-%20splash/iuisplash_vm5caf.jpg" alt="splashiui"></img>
</Link> </projectBox>
<projectBox> <Link to="/project/gatsby/">
<h2>Website Design with Gatsby</h2>
<img src="https://res.cloudinary.com/chiv/image/upload/v1570478670/projects/ui%20-%20splash/all2_usnuoz.jpg" alt="splashgatsby"></img>
</Link> </projectBox>
<projectBox> <Link to="/project/operator/">
<h2>Leap Motion Operator</h2>
<img src="https://res.cloudinary.com/chiv/image/upload/v1570478671/projects/ui%20-%20splash/operatorsplash2_tgogpz.jpg" alt="splashoperator"></img>
</Link> </projectBox>
*/

/*
          <ol className={projectsStyle.posts}>
              {data.allContentfulProject.edges.map((edge) => {
                  return (
                      <li className={projectsStyle.post}>
                          <Link to={`/project/${edge.node.slug}`}>
                              <h2>{edge.node.title}</h2>
                              <p>{edge.node.date}</p>
                          </Link>
                      </li>
                  )
              })}
          </ol>
          */

/*
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  */


export default IndexPage
