import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactPage = () => {

  return (
      <Layout>
          <SEO title="Contact" />
          <table>
           <tr>
             <th></th>
             <th></th>
           </tr>
           <tr>
             <td><MdEmail /> E-mail</td>
             <td><a href="mailto:makardere@ku.edu.tr" target="_top">makardere@ku.edu.tr</a></td>
           </tr>
           <tr>
             <td><FaGithub /> GitHub</td>
             <td><a href="https://github.com/MertcanAkardere?tab=repositories" target="_blank">github.com/MertcanAkardere</a></td>
           </tr>
           <tr>
             <td><FaLinkedinIn /> LinkedIn</td>
             <td><a href="https://www.linkedin.com/in/makardere/" target="_blank">linkedin.com/in/makardere/</a></td>
           </tr>
         </table>
      </Layout>
  )
}

export default ContactPage
