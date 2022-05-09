
import React, { useEffect, useState } from 'react'
import { decode as base64_decode, encode as base64_encode } from 'base-64';

const Text = () => {
    var existing = localStorage.getItem('Img and Video');
    const test = [];
    test.push(existing);

    localStorage.setItem('Image path', base64_encode(test));
    const [text, setText] = useState('');
    const [resultarr, setResultarr] = useState([]);
    const [linksrc, setLinksrc] = useState('');
    const [videosrc, setVideosrc] = useState('');
    const [ytsrc, setYtsrc] = useState('');

    // export default function TextForm(props) {
    // const [history, setHistory] = useState('');
    // const [resultarr1, setResultarr1] = useState([]);
    //   const [title, setTitle] = useState("");



    useEffect(() => {
        var test = JSON.parse(localStorage.getItem("Text"));

        if (test != null) {
            setResultarr(test);
        }

        // var test1 = JSON.parse(localStorage.getItem("Title"));
        // if (test1 != null) {
        //   setResultarr1(test1);
        // }
    }, []);

    // var existing = localStorage.getItem('Notes');
    // const test = [];
    // test.push(existing);

    // localStorage.setItem('Notes', test);


    const Bold = () => {
        // console.log("Uppercase was clicked: " +  text);

        var target = document.getElementById("myBox");
        if (target.style.fontWeight === "bolder") {
            target.style.fontWeight = "normal";
        } else {
            target.style.fontWeight = "bolder";
        }

    }

    const Italics = () => {
        var target = document.getElementById("myBox");
        if (target.style.fontStyle === "italic") {
            target.style.fontStyle = "normal";
        } else {
            target.style.fontStyle = "italic";
        }
    }

    const Underline = () => {
        var target = document.getElementById("myBox");
        if (target.style.textDecoration === "underline") {
            target.style.textDecoration = "none";
        } else {
            target.style.textDecoration = "underline";
        }
    }

    const clearAll = () => {
        let newText = '';
        setText(newText)
        localStorage.removeItem('Text')
        localStorage.removeItem('Img and Video')
        let newLinksrc = '';
        setLinksrc(newLinksrc)
        existing = "";
        setVideosrc("");
        setYtsrc("");

        resultarr.length = 0;
        // Another method:
        // while(resultarr.length > 0) {
        //     resultarr.pop();
        // }
        // console.log(resultarr);
    }

    const save = () => {
        if (text != "") {
            resultarr.push(text);
            localStorage.setItem("Text", JSON.stringify(resultarr));
            setText("")
        }
    }

    const getHistory = () => {
        const element = []
        // setText(resultarr);
        for (let i = 0; i < resultarr.length; i++) {
            element.push(resultarr[i])
            element.push("\n")
        }
        //  console.log("elements:",element);
        setText(element)
        // return(

        // <div className='text'>
        //         {resultarr.map((data) => {
        //             return <p>{data}</p>;
        //         })}
        //   </div>
        //  )
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const rightAlign = () => {
        var target = document.getElementById("myBox");
        target.style.textAlign = "right";
    }

    const clrTxt = () => {
        setText('')
    }

    const leftAlign = () => {
        var target = document.getElementById("myBox");
        target.style.textAlign = "left";
    }

    const loadImg = () => {
        // console.log("On change");
        setLinksrc(text)
        test.push(text);

        localStorage.setItem("Img and Video", test);
        // test.push(text)
        // localStorage.setItem("Image path", base64_encode(text))
        //  console.log("storage" +  text);
    }

    const loadVideo = () => {
        // console.log("On change");

        setYtsrc(text)
        test.push(text);
        localStorage.setItem("Img and Video", test);
        // test.push(text)
        // localStorage.setItem("Image path", base64_encode(text))
        //  console.log("storage" +  text);
    }

    const loadYtVideo = () => {
        // console.log("On change");

        setVideosrc(text)
        test.push(text);
        localStorage.setItem("Img and Video", test);
        // test.push(text)
        // localStorage.setItem("Image path", base64_encode(text))
        //  console.log("storage" +  text);
    }

    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container" >

                <button className="btn" onClick={Bold}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16">
                        <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
                    </svg>
                </button>

                <button className="btn" onClick={Italics}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-type-italic" viewBox="0 0 16 16">
                        <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
                    </svg>
                </button>

                <button className="btn" onClick={Underline}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-type-underline" viewBox="0 0 16 16">
                        <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" />
                    </svg>
                </button>

                <button className="btn" onClick={leftAlign}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filter-left" viewBox="0 0 16 16">
                        <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

                <button className="btn" onClick={rightAlign}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filter-right" viewBox="0 0 16 16">
                        <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
                    </svg>
                </button>

                <button className="btn" onClick={clrTxt}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-backspace-fill" viewBox="0 0 16 16">
                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                    </svg>
                </button>

                <button className="btn" onClick={save}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                </button>

                <button className="btn" onClick={loadImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                    </svg>
                </button>

                <button className="btn" onClick={loadYtVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                    </svg></button>

                <button className="btn" onClick={loadVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg></button>

                <button className="btn" onClick={clearAll}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </button>

                <button className='btn' onClick={getHistory}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg></button>

                <div className="mb-3">
                    <textarea className="text" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                {linksrc != '' && <img src={linksrc} alt='user input image not found' width="500" height="333"></img>}


                {ytsrc != '' && <iframe
                    src={"https://www.youtube.com/embed/" + ytsrc.slice(32)}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                />}
                <div className="App">

                    {videosrc != '' && <video width="750" height="500" controls >
                        <source src={videosrc} type="video/mp4" />
                    </video>}
                </div>
            </div>


            {/* <div className='map'>
               

                {resultarr.map((data) => {
                    return <p>{data}</p>;
                })}  
            </div> */}
        </>
    )
    // }
}
export default Text;