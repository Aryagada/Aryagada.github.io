
import React, { useEffect, useState } from 'react'

const Text = () => {

    // export default function TextForm(props) {
    const [text, setText] = useState('');
    // const [history, setHistory] = useState('');
    const [resultarr, setResultarr] = useState([]);
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


    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)

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



        localStorage.removeItem('Text')


    }

    const save = () => {

        resultarr.push(text);
        localStorage.setItem("Text", JSON.stringify(resultarr));

        let newText = ('');
        setText(newText)
       
        // test.push(text);
        // localStorage.setItem("Notes", test)
        // console.log("storage" +  text);

    }

    // const getHistory = () => {
    //  setHistory(resultarr);

    // }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)

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


    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container" >

                <div className="mb-3">
                    <textarea className="text" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn" onClick={handleClearClick}>Clear Entire Text</button>
                <button className="btn" onClick={handleCopy}>Copy Entire Text</button>
                <button className="btn" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn" onClick={save}>save</button>
                <button className="btn" onClick={clearAll}>Clear All History</button>
                {/* <button className="btn" onClick={getHistory}>Show History</button> */}
            </div>
            {/* <div className="container" >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length-0s.008} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div> */}
            <div className='map'>
                <h3>History:</h3>

                {resultarr.map((data) => {
                    return <p>{data}</p>;
                })}
            </div>
        </>
    )
    // }
}
export default Text;
