import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Prism from 'prismjs';

import projectsStyle from "../styles/code.scss"

const CodePage = () => {

  return (
      <Layout>
          <SEO title="Code Sample: Relative Object Placement in Unity" />

          <h1>Code Sample: Relative Object Placement in Unity</h1>
          <h>For intelligent user interface project, I was implementing level design with speech commands. Upon exploratory testing I noticed the most intuitive way to place objects was to describe position in relative to other objects. Therefore I defined methods like creating an object on top of another one. </h>

          <h><br /><br />The Gist for the can be accessed <a href="https://gist.github.com/MertcanAkardere/dd74b7723450188889cef2e78cbfb6d8"  target="_blank">here.</a>
             <br /><br />Here I will explain how I coded this step-by-step:</h>

          <pre class="cscode"><code><span class="com">/**<br />
            * Params:<br />
            *   childName: the name of the object that is being created(ex: vase)<br />
            *   parentName: the name of the object that is being used to describe the relative destination(ex: table)<br />
            * Pre: none<br />
            * Post: prefab with name childName is created on top of the parentName.<br />
          **/</span><br />
          <span class="key">public</span> <span class="key">void</span> createOnTop(<span class="key">string</span> childName, <span class="key">string</span> parentName)<br />
          &#123;<br />
              GameObject parent = GetClosest(parentName);<br />
              <span class="key">float</span> height = GetObjectHeight(parent);<br />
              GameObject child = createPrefab(childName);<br />
              child.transform.position = parent.transform.position;<br />
              child.transform.localPosition = <span class="key">new</span> Vector3(child.transform.position.x, height, child.transform.position.z); <span class="com"><br />// can't change only y. have to declare a new vector3</span><br />
              lastObject = child;<br />
              moveControls.autoSelect(child);<br />
          &#125;
          </code></pre>

          <h>First we need to find the game object referred when the speech command is given. For example, if the user says “place a vase on the table” we need to determine which object is referred by table. For this I decided query every object on the screen, and find the one with the name “table” that is closest to the center of the screen. </h>

          <pre class="cscode"><code><span class="key">public</span> GameObject GetClosest(<span class="key">string</span> prefabName)<br />
          &#123;<br />
              <span class="key">return</span> GetClosest(prefabName, tag_levelobjects);<br />
          &#125;<br />
          <span class="key">public</span> GameObject GetClosest(<span class="key">string</span> prefabName, <span class="key">string</span> tagName) <span class="com">// Thanks to bigmisterb from unity forums.</span><br />
          &#123;<br />
              GameObject[] objects = GameObject.FindGameObjectsWithTag(tagName);<br />
<br />
              GameObject closest = <span class="key">null</span>;<br />
              <span class="key">float</span> dot = -2.0f;<br />
              <span class="key">foreach</span> (GameObject obj <span class="key">in</span> objects) <span class="com">// if prefabName!</span><br />
              &#123;<br />
                  <span class="key">if</span> (obj.name.ToLower() == prefabName || obj.name.ToLower() == prefabName + <span class="str">"(clone)"</span> || obj.name.ToLower() == prefabName + <span class="str">" (1)"</span>)<br />
                  &#123;<br />
                      <span class="com">// store the Dot compared to the camera's forward position (or where the object is locally in the camera's space)</span><br />
                      <span class="com">// Very important that the point is normalized.</span><br />
                      <span class="com">//Vector3 t = Camera.main.transform.position;</span><br />
                      Vector3 localPoint = Camera.main.transform.InverseTransformPoint(obj.transform.position).normalized;<br />
                      Vector3 forward = Vector3.forward;<br />
                      <span class="key">float</span> test = Vector3.Dot(localPoint, forward);<br />
                      <span class="key">if</span> (test &gt; dot)<br />
                      &#123;<br />
                          dot = test;<br />
                          closest = obj;<br />
                          Debug.Log(<span class="str">"closest: "</span> + closest.name);<br />
                      &#125;<br />
                  &#125;<br />
                  <span class="key">else</span> &#123; Debug.Log(obj.name + <span class="str">" "</span> + prefabName); &#125;<br />
              &#125;<br />
              <span class="key">return</span> closest;<br />
          &#125;</code></pre>

          <h>The code that finds the closest object to the center of the screen is courtesy of bigmisterb from unity forums. I just added the conditions so it only checks the objects with the right tag, and checks the object name with (duplicate) or (1) concatenated in case the object was duplicated or multiples were created. </h>
          <br /><h><br /></h><hr />
          <h>The next step was finding the parent object’s height. It’s important to note Unity keeps game object’s locations in relative to their parent object, and their sizes can adjusted. So I found the safest way to find the top of the object was to get object position, which is the center by default and add half of the renderer’s height. </h>

          <pre class="cscode"><code>max = obj.transform.position.y + (obj.GetComponent&lt;Renderer&gt;().bounds.size.y / 2);</code></pre>

          <h>But some 3D assets I used had no renderer, instead it had children with renderers. For example table had table’s top and table’s legs as its children objects. So I added a condition to check for renderer, then run a loop to check for each renderer and find their top.  </h>

          <pre class="cscode"><code><span class="key">public</span> <span class="key">float</span> GetObjectSizeOn(GameObject obj, <span class="key">int</span> dim)<br />
          &#123;<br />
          <span class="key">float</span> max = 0;<br />
          &#123;<br />
          <span class="key">if</span> (obj.GetComponent&lt;Renderer&gt;() != <span class="key">null</span>)<br />
          max = obj.transform.position.y + (obj.GetComponent&lt;Renderer&gt;().bounds.size.y / 2); <span class="com">// center height + object total height/2  </span><br />
          &#125;<br />
          <span class="key">else</span><br />
          &#123;<br />
          <span class="key">float</span> check = 0;<br />
          <span class="key">foreach</span> (Renderer renderer <span class="key">in</span> obj.GetComponentsInChildren&lt;Renderer&gt;())<br />
          &#123;<br />
          check = renderer.transform.position.y + (renderer.bounds.size.y / 2);<br />
          <span class="key">if</span> (check &gt; max)<br />
            max = check;<br />
          &#125;<br />
          &#125;<br />
          <span class="key">return</span> max;<br />
          &#125;</code></pre>

          <h>Relative locations help here, as table legs’ renderer is longer, but still return a lower y value than the top of the table top. </h>
          <br /><br />

          <h>Then an object with the childName is created. The createPrefab function looks at namedEntities dictionary that is string to prefab, and creates a game object from that prefab. Then the object is created at the center of the top of the parent object. </h>

          <pre class="cscode"><code><span class="key">public</span> GameObject createPrefab(<span class="key">string</span> prefabName)<br />
          &#123;<br />
              <span class="key">return</span> createPrefab(prefabName, Vector3.zero);<br />
          &#125;<br />
          <span class="key">public</span> GameObject createPrefab(<span class="key">string</span> prefabName, Vector3 position)<br />
          &#123;<br />
              GameObject pre;<br />
              Quaternion rotation = <span class="key">new</span> Quaternion(0, 0, 0, 0);<br />
              <span class="key">if</span> (namedEntities.TryGetValue(prefabName, <span class="key">out</span> pre)) <span class="com">// get game object from Entity Dictionary </span><br />
              &#123;<br />
                  pre = Instantiate(pre, position, pre.transform.rotation) <span class="key">as</span> GameObject;<br />
                  Debug.Log(<span class="str">"add"</span>);<br />
                  saver.addCreatedObject(prefabName);<br />
                  lastObject = pre;<br />
                  moveControls.autoSelect(pre);<br />
                  <span class="key">return</span> pre;<br />
              &#125;<br />
              <span class="key">return</span> <span class="key">null</span>;<br />
          &#125;</code></pre>


      </Layout>
  )
}
//           <embed src="https://res.cloudinary.com/chiv/image/upload/v1570492569/pdfs/CV_MertcanAkardere_dssgh5.pdf" width="100%" height="1300px" />
export default CodePage
