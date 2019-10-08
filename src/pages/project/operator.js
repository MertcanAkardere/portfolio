import React from "react"

import Layout from "../../components/layout.js"
import SEO from "../../components/seo"

const OperatorProjectPage = () => (
<Layout>
  <SEO title="Leap Motion Operator" />
    <h1>Leap Motion Operator</h1>
    <h5>June 6th 2019</h5>
    <p></p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570370586/projects/operator/splash_ngl6ip.jpg" alt="splash"></img>
    <h3>Aim of the Project</h3>
    <p>Unmanned vehicles, instead of the outdated mechanical controls, could be controlled more intuitively with hand gestures and have more advanced movement commands than simple direction instructions by programming maneuvers therefore increasing efficiency of controls. This project attempted to develop an intuitive, efficient and accurate controls by detecting hand gestures with the help of Leap Motion, and demonstrating this in a simulation with an unmanned vehicle on the Unity, and showing this simulation on a VR headset for the immersive user experience. </p>
    <p>   Hand positions and finger directions were used to control a vehicle while gestures did more advanced commands. These sets of controls were raced against the classic methods to test their effectiveness. Accuracy of the Leap Motion was refined by adding conditionals to counter small losses of input. Thus, new means of controlling a vehicle via hands was developed to challenge the classic methods of control.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570370578/projects/operator/sim_tkgpnx.jpg" alt="sim" ></img>
    <hr></hr>
    <h3>User Controls</h3>
    <p>Two set of gestures for movement (move set) was defined for Leap Motion. First move set was the most basic, as moving the left hand forward would make the left wheels turn and right hand ran the right ones. Having both hands forward made the car go forward and meeting hands in the center triggered the brakes.</p>
    <p>  Second move set was designed to be intuitive and efficient. Right index finger determined the direction of the car's movement. Showing forward made the car go forward and pointing backwards made the car go in reverse.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570370581/projects/operator/me_zoxlly.jpg" alt="me"></img>
    <hr></hr>
    <h3>Technical Background</h3>
    <p>Basic car physics was programmed to simulate unmanned vehicle. Abstracted vehicle controls were programmed to make comparisons with different control methods fair.</p>
    <p>  Move Set 1 was implemented by creating two big spheres and attaching them to either side of the car. Then these were turned into triggers and made invisible to not obstruct the screen. Thus hand models could trigger them when held forward. A box shaped sensor was added in between the sphere ones for brakes.</p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570370578/projects/operator/sensors_enfxqn.jpg" alt="sensors"></img>
    <p>  Move Set 2 was implemented by making use of the finger direction sensor that is natively supported by the Leap Motion SDK. In order to get consistent input, six different sensor thresholds were implemented. These were turning left or right when going forwards or backwards and going straight forward or in reverse. Also gesture for a complex movement was experimented. When point to a side with left index and pinky fingers, the car changes a lane towards the pointed direction.</p>
    <hr></hr>
    <h3></h3>
    <p>For more immersive experience VR (Google Cardboard) support was added.</p>
    <p>  During tests Leap Motion would provide discontinuous or unstable data. These were handled by introducing countermeasures such as awaiting few milliseconds of consistent data before changing direction or speed.</p>
    <p>  This was my final project and presented in front of the engineering department. There I also had to chance to observe as non-experts of the field tested this project.  </p>
    <img src="https://res.cloudinary.com/chiv/image/upload/v1570370595/projects/operator/poster_jje9lt.jpg" alt="poster"></img>
    <hr></hr>
    <h3>Conclusion</h3>
    <p>Due to experience difference and quicker controls, the classic methods performed better than the movement sets. Yet the difference was no great, indicating that the effectiveness of the movement sets was passable.</p>
    <p>  Despite being intimidating at first due to its unfamiliar design, using Leap Motion was being learnt at a considerable pace, suggesting its decent intuitiveness.</p>
    <p>  Even though there were countermeasures for the inaccuracies that may occur with Leap Motion were implemented, they were not enough to get a solid input which reduced effectiveness, increased frustration and confusion among new users that did not know how to deal with the issues and increased the chance of accidents. Despite being usable in virtual world with reset button, this would not be consistent enough to use an unmanned vehicle in real world.</p>
    <p></p>
    <h5>Report: <a href="https://res.cloudinary.com/chiv/image/upload/v1570492597/pdfs/Leap_Motion_Operator_with_VR_jvlxvi.pdf"  target="_blank">Report (PDF)</a>.</h5>
    <p></p>
    <h5>Project: <a href="https://github.com/MertcanAkardere/Leap-Motion-Operator-with-VR"  target="_blank">GitHub</a>.</h5>
    <p></p>
    <h5>References: </h5>
    <p>Gartner Says Almost 3 Million Personal and Commercial Drones Will Be Shipped in 2017.” Gartner, 9 Feb. 2016 www.gartner.com/newsroom/id/3602317</p>
    <p></p>
</Layout>

)

export default OperatorProjectPage
/*
<p></p>
<p></p>
<hr></hr>
<h3></h3>
<img src="" alt="slide"></img>
*/
