import React, { useState } from 'react'



{/* <link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/> */}

export default function Video() {
  var existing = localStorage.getItem('Video path');
  const test = [];
  test.push(existing);

  localStorage.setItem('Video path', test);


  const Change = (event) => {
    console.log("On change");

    setLink(event.target.value)

  }


  const loadImg = () => {
    // console.log("On change");
    setLinksrc(link)

    test.push(link)
    localStorage.setItem("Video path", test)
    // console.log("storage" +  text);

  }
  const getitem = () => {

    var x = localStorage.getItem("Video path");
    document.getElementById("demo").innerHTML = (x.slice(1));
  }


  const clear = () => {
    // console.log("On change");
    localStorage.removeItem('Video path')
    let newLink = '';
    setLink(newLink)
    document.getElementById("demo").innerHTML = '';

  }

  const [link, setLink] = useState('');
  const [linksrc, setLinksrc] = useState('');
  return (
    <div className="container">
      <div className="linkText">
        <h3>Enter the link of the Video below</h3>

        <textarea className="text" value={link} onChange={Change} rows="5"></textarea>
        <p >history</p>
        <p id="demo"></p>
        <button className="btn" onClick={loadImg}>Get Video</button>
        <button className="btn" onClick={clear}>Clear</button>
        <button className="btn" onClick={getitem}>Get history</button>
        <div>
          {/* <video src={linksrc} alt='user input Video not found' width="500" height="333"></video>  */}
          {/* <video width="320" height="240" controls autoPlay src="https://www.youtube.com/embed/il_t1WVLNxk" type="video/mp4">
            

            Your browser does not support the video tag.
          </video> */}


          <iframe

            src={"https://www.youtube.com/embed/" + linksrc.slice(-11)}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>


      </div>
    </div>
  )
}
