import React from "react"

import Layout from "../../components/layout.js"
import SEO from "../../components/seo"

const IUIProjectPage = () => (
<Layout>
  <SEO title="Level Design with Intelligent User Interface in Unity" />
    <post>
    <h1>Level Design with Intelligent User Interface in Unity</h1>
    <h5>June 5th 2019</h5>
    <p></p>
    <h4>Promo Video with Instructions:</h4>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/ossObkjP-cs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
    <p></p>
    <h3>Aim of the Project</h3>
    <p>This project aims to provide new tools to level design, to bring the designer's vision into reality by allowing to design from the player's perspective. These tools are designed to be intuitive and enabling instead of obstructing the creative process like Unity complex UI. There are also more complex commands implemented to increase the tools' efficiency and make experimenting during the design easier. </p>
    <p>This project introduces a new multimodal approach to design level in Unity with speech commands and hand gestures. Speech commands to create and edit objects can be given with a natural language, and objects or locations can be selected by pointing with a finger. Gamepad can be used to navigate the camera, select and move the objects.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide3_jaltcb.jpg" alt="slide3" ></img>
    <hr></hr>
    <h3>How to use it</h3>
    <p>Voice commands have several uses from creating objects to editing their properties. Objects can be created in the default location, or in relative to other objects, or where the user points with the index finger.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide5_bkxcfo.jpg" alt="slide5"></img>
    <p>Users can select an object with a gamepad, or verbally pick it (if several ones are on the screen, the one that is closest to the middle is selected), or by pointing at it. Then edit it's several attributes like it's material, size or color.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide7_b5pdit.jpg" alt="slide7"></img>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201586/projects/iui/Slide8_b951mi.jpg" alt="slide8"></img>
    <p>For navigation around the level and controlling the camera, a gamepad is used to keep the design process from the player's point of view. But the perspective can be change to bird's-eye view and side view to make precise placements.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201582/projects/iui/Slide10_gnwwvp.jpg" alt="slide10"></img>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201585/projects/iui/Slide9_akch1z.jpg" alt="slide9"></img>
    <hr></hr>
    <h3>Technical Background</h3>
    <p>For voice commands, Microsoft's Speech Services are used. Audio is turned into small WAV files and uploaded to Speech Services. This returns a sentence string with a certain accuracy, that is uploaded again for Microsoft's LUIS for natural language processing. </p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide4_z2xsih.jpg" alt="slide4"></img>
    <p>Trained LUIS model finds the intent and determines the entities involved. This service returns a json file with intents and entities, and these determine the use case and the target objects.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide3_jaltcb.jpg" alt="slide3"></img>
    <p>Object entities are returned as a string. Therefore their corresponding prefabs (Unity's game objects) are determined by looking up a string to prefab dictionary.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide6_go6sgj.jpg" alt="slide6"></img>
    <p>This dictionary is available in the Unity's native UI, and easily expandable or customized by the designer. Adding a prefab to speech command is done by adding the name of the object then picking the relevant prefab. If that name is in English language, Cognitive Services will guess it correctly and LUIS is trained to work with most objects and furniture so that may work even without training the data again.</p>
    <p>Materials use a similar dictionary to be extendible and customizable.</p>
    <hr></hr>
    <h3>Conclusion:</h3>
    <p>This intelligent user interface was promising as it did provide most of the necessary tools of level design in a similar effectiveness, also it was intutive, and fun to use. It required some more functionality to be feature-complete. But it did perform well compared to the classic method by taking shorter time and being slightly less precise. Details are in the report file.</p>
    <h5>Report: <a href="https://res.cloudinary.com/chiv/image/upload/v1570523757/pdfs/Level_Design_IUI_Report_tbesnk.pdf"  target="_blank">Report (PDF)</a>.</h5>
    </post>
    <p></p>

</Layout>

)

export default IUIProjectPage
