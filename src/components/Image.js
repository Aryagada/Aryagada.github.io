import React, { useState } from 'react'
import { decode as base64_decode, encode as base64_encode } from 'base-64';
// let encoded = base64_encode(link);
export default function Image() {

    var existing = localStorage.getItem('Image path');
    const test = [];
    test.push(existing);

    localStorage.setItem('Image path', base64_encode(test));


    const Change = (event) => {
        // console.log("On change");

        setLink(event.target.value)
    }

    const clear = (event) => {
        // console.log("On change");
        localStorage.removeItem('Image path')
        let newLink = '';
        setLink(newLink)

    }


    const loadImg = () => {
        // console.log("On change");
        setLinksrc(link)

        test.push(link)
        localStorage.setItem("Image path", base64_encode(test))
        // console.log("storage" +  text);

    }
    const getitem = () => {

        var x = localStorage.getItem("Image path");
        document.getElementById("img").innerHTML = (x.slice(1));
      }
    

    const [link, setLink] = useState('');
    const [linksrc, setLinksrc] = useState('');
    return (
        <div className="container">
            <div className="linkText">
                <h3>Enter the link of the picture below</h3>
                <textarea className="text" value={link} onChange={Change} rows="5"></textarea>
                <button className="btn" onClick={loadImg}>Get Image</button>
                <button className="btn" onClick={clear}>Clear all</button>
        <button className="btn" onClick={getitem}>Get history</button>
        <p id="img"></p>

                <img src={linksrc} alt='user input image not found' width="500" height="333"></img>


            </div>
        </div>
    )
}
