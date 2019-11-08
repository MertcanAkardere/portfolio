import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CVPage = () => {

  return (
      <Layout>
          <SEO title="CV" />
          <object data="https://res.cloudinary.com/chiv/image/upload/v1573231409/pdfs/CV16_eifv4y.pdf" type="application/pdf" width="100%" height="1300px">
            <embed src="https://res.cloudinary.com/chiv/image/upload/v1573231409/pdfs/CV16_eifv4y.pdf" type="application/pdf" />
              <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://res.cloudinary.com/chiv/image/upload/v1573231409/pdfs/CV16_eifv4y.pdf">Download CV (PDF)</a>.</p>
          </object>
      </Layout>
  )
}
//           <embed src="https://res.cloudinary.com/chiv/image/upload/v1570492569/pdfs/CV_MertcanAkardere_dssgh5.pdf" width="100%" height="1300px" />
export default CVPage
