import React from "react"

import Layout from "../../components/layout.js"
import SEO from "../../components/seo"

const GatsbyProjectPage = () => (
<Layout>
  <SEO title="Gatsby Portfolio Website" />
    <h1>Website Design with Gatsby</h1>
    <h5>October 6th 2019</h5>
    <p></p>
    <h3>Aim of the Project</h3>
    <p>This website has been my challenge to learn industry standard web design tools as my prior knowledge was on PHP.</p>
    <p>Since my portfolio is a static webpage, I decided to use Gatsby for performance. Gatsby is powered by React, HTML, SASS and GraphQL. So I learnt some transferable skills.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570478670/projects/ui%20-%20splash/all2_usnuoz.jpg" alt="slide3" ></img>
    <hr></hr>
    <h3>How to use it</h3>
    <p>Gatsby meets most progressive web app(PWA) requirements out of the box. PWAs have potential to be standard for start-ups for ease of user experience and cross-platform development(1) that is pivotal in a market that introduces new platforms and demands updates regularly.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570524145/projects/gatsby/pwa_etvczc.png" alt="slide5"></img>
    <p>Good practices of web design are implemented to this site as I learn them. I use site metadata and helmet to keep the data centralized and keep the page speed high(2). I use Cloudinary as my CDN.</p>
    <hr></hr>

    <h5>References: </h5>
    <p>(1) https://developers.google.com/web/progressive-web-apps</p>
    <p>(2) https://moz.com/learn/seo/page-speed</p>
    <p></p>
</Layout>

)

export default GatsbyProjectPage
