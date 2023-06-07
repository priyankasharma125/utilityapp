import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [Text, setText] = useState("")
    const Handleclick = (e) => {
        // console.log("onchange")
        setText(e.target.value);
    }
    const UpperText = () => {
        // console.log("uppercase")
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const ClearText = () => {
        // console.log("uppercase")
        let newText = ""
        setText(newText)
    }
     const CopyText = () => {
      var mytext=document.getElementById("mytext");
      mytext.select();
      navigator.clipboard.writeText(mytext.value);
    }
    return (
        <>
            <h1 className='my-4 text-center'>TextUtility App</h1>
            <div className="container my-4">

                <textarea className="form-control" id="mytext" value={Text} onChange={Handleclick} rows="10" cols="5"></textarea>
                <div>
                    <button className='btn btn-primary my-4' onClick={UpperText}>Uppercase</button>
                    <button className='btn btn-primary my-4 mx-3 ' onClick={CopyText}>Copy</button>
                    <button className='btn btn-primary my-4 mx-1 ' onClick={ClearText}>Clear</button>
                </div>
                <div>
                    <h3>Text summary</h3>
                    <p>{Text.trim().split(/\s+/g).filter(value => value !== "").length} words and {Text.length} characters</p>
                    <h3>Preview</h3>
                    <p>{Text}</p>
                </div>
            </div>
        </>
    )
}

export default Home