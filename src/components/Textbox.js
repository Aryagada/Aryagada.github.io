import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

var i;

export default function TextForm(props) {

    const test = [];
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState([])
    const [text, setText] = useState('');

    var existing = localStorage.getItem("Notes");

    test.push(existing);

    localStorage.setItem("Notes", test);

    function getHistory() {
        {
            notes.map((note, index) => {

                return (
                    <div key={note.title + index}>
                        <p>{note.title}</p>
                        <p>{note.text}</p>
                    </div>)
            })
        }
    }

    <getHistory notes={notes} />

    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        props.text(text.toUpperCase());
        // setText(newText)

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)

    }

    const clearAll = () => {
        let newText = '';
        setText(newText)

        for (let j = 0; j < 500; j++) {

            localStorage.removeItem("Notes")

        }


    }

    // const getHistory = () => {

    // var x = localStorage.getItem("Notes");
    // document.getElementById("demo").innerHTML = x.slice(1,x.length);
    // var y = localStorage.getItem("Title");
    // document.getElementById("titleSpace").innerHTML = y;

    // }

    const save = () => {

        test.push(text);
        localStorage.setItem("Notes", test)
        localStorage.setItem("Title", title)
        props.notes.push(title);
        localStorage.setItem("title", JSON.stringify(props.notes));
        // console.log("storage" +  text);


        console.log("text" + text);
        console.log("title" + title);

        var noteObj = { title: title, text: text }
        console.log("object", noteObj);
        console.log("note1", notes);
        var noteArr = [...notes, noteObj]// notes.push(noteObj);
        console.log("note2", notes);
        console.log("noteArr", noteArr);

        setNotes(noteArr)
        console.log("note Array", noteArr);
        console.log("note", notes);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
        // setTitle(event.target.value)


    }



    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);

    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
        console.log("title", event.target.value);
    }

    //     const handleTitleChange = (event) => {
    //         setDesc(event.target.value)
    // console.log("title",event.target.value);
    //     }


    return (
        <>
            <div className="container" >
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    {/* <p value= {title} onChange={handleOnChange}>Enter the title</p> */}
                    <textarea className="title" value={title} onChange={handleTitleChange} id="myBox" rows="2"></textarea>
                    <textarea className="text" value={props.text} onChange={handleOnChange} id="myBox" rows="10"></textarea>

                </div>
                <button className="btn" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn" onClick={handleClearClick}>Clear Entire Text</button>
                <button className="btn" onClick={handleCopy}>Copy Entire Text</button>
                <button className="btn" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn" onClick={save}>save</button>
                <button className="btn" onClick={clearAll}>Clear All History</button>
                <button className="btn" onClick={getHistory}>Show All History</button>
                <h3>Your history:</h3>
                <h2 id="titleSpace" ></h2>
                <p id="demo" ></p>
            </div>
            {/* <div className="container" >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length-0s.008} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div> */}

        </>
    )
}