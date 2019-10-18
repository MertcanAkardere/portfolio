import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout.js"
import SEO from "../components/seo"

const AboutPage = () => (
<Layout>
  <SEO title="About" />
    <h1>About Mertcan Akardere</h1>
    <p>Mertcan is a computer engineer, experienced in database management, programming and game development. Passionate to transform his designs into reality in the best way possible, he attended one of the best high school and university in Turkey. His <a href="https://res.cloudinary.com/chiv/image/upload/v1570492569/pdfs/CV_MertcanAkardere_dssgh5.pdf"  target="_blank">CV is available here</a>.</p>
    <p>For his final project in computer engineering, he combined his interest in trying new technologies and Unity development by making a project to control a vehicle with hand movements using Leap Motion and showing it on a VR headset.Project page is <Link to="/project/operator/">here</Link>.</p>
    <p>For his intelligent user interfaces course, he developed a tool to design levels from a player's perspective using speech commands (NLP) and hand gestures. This provided extensible list of game objects being placable or editable with natural speech and pointing at a location or an object. Project page is <Link to="/project/iui/">here</Link>.</p>
    <hr></hr>
    <p>His passion for game development encouraged him to learn different platforms (Unity, Construct 2, etc...) and develop small games to test his skills. He also attended various events to further widen his perspective of game development.</p>
    <p>Peak Games Unithon was the most recent event he attended, where he was part of a group of seven that designed a game, its product plan and marketing strategy. His group was honoured the first place among a dozen groups. Presentation of their project is <a href="https://res.cloudinary.com/chiv/image/upload/v1570492607/pdfs/Wild_Animal_Chase_cz23m1.pdf"  target="_blank">here</a>. </p>
    <hr></hr>
    <p>For his first internship, he worked with MBIS Danışmanlık to gain experience on SAP. As an ABAP programmer, he implemented interactive ALVs to increase workflow and designed SmartForms to automate generating print-ready reports. Detailed report of the internship is <a href="https://res.cloudinary.com/chiv/image/upload/v1570492606/pdfs/SAP_ABAP_Programming_for_MBIS_Dansmanlk_dfk7g3.pdf"  target="_blank">here</a>.</p>
    <p>For his second internship, he worked with E&M Bilgisayar to gain insight on working with more end-user focus. He experienced designing a database (SQL) and creating an end-user interface (Microsoft Visual Studio, C#) to manipulate the data according to the directions given by a customer firm. Detailed report of the internship is <a href="https://res.cloudinary.com/chiv/image/upload/v1570492609/pdfs/SQL_Database_with_Interface_for_EM_Bilgisayar_b6kopl.pdf"  target="_blank">here</a>.</p>
</Layout>

)

export default AboutPage

// <a href="/externals">External Links.</a>
// <a href="https://external.com/chiv" target="_blank">External Link in new tab</a>
// <Link to="/internal">Internal Links.</Link>

// glassdoor
// linkedin

// github
// unity asset store

// twitter?
// dc?

// email
// phone
