import React from 'react'
import { Link } from "gatsby"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';

import "../styles/footer.scss"

const Footer = () => (


<footer>
<div class="inner_footer">
<div class="navigation">
  <nav>
    <ul class="links">
      <li><a href="https://github.com/MertcanAkardere?tab=repositories" target="_blank"><FaGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/makardere/"  target="_blank"><FaLinkedinIn /></a></li>
      <li><a href="mailto:makardere@ku.edu.tr" target="_top"><MdContactMail /></a></li>
    </ul>
  </nav>
  </div>
  </div>


</footer>

)

/*

<div class="footer">
  <div class="inner_footer">
    <ul class="links">
      <li><a href="mailto:makardere@ku.edu.tr" target="_top">makardere@ku.edu.tr<FaGithub /></a></li>
      <li><a href="https://github.com/MertcanAkardere?tab=repositories" target="_blank"><FaGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/makardere/"  target="_blank"><FaLinkedinIn /></a></li>

    </ul>
    <li><a href="https://github.com/MertcanAkardere?tab=repositories" target="_blank">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/makardere/"  target="_blank">LinkedIn</a></li>
  </div>
</div>

*/

export default Footer
