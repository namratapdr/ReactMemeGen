import React from 'react'

export function Memes(props) {
    return(
        <div className="memeGenerator">
            <form className="memeForm" onSubmit={props.handleSubmit}>
                <label>
                   <h2>Top Text: </h2> 
                    <input type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={props.data.topText}
                    onChange={props.handleChange}
                    />
                </label>
               
                <label>
                    <h2>Bottom Text: </h2> 
                    <input type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={props.data.bottomText}
                    onChange={props.handleChange}
                    />
                </label>
                <br></br>
                <label id="radio">Text Color:
            <label>
               
                <input type="radio"
                    name="textColor"
                    value="white"
                   checked={ props.data.textColor === "white"}
                   onChange={ props.handleChange}
                /> White
            </label>
          
            <label>
                <input type="radio"
                   name="textColor"
                   value="black"
                   checked={ props.data.textColor === "black"}
                   onChange={props.handleChange}
                /> Black
            </label>
            </label>
                <button >Gen</button>
           </form>
           <div className="meme">
            
            <div className="memeImage"><img src={props.data.image} alt="memeImage"></img></div>
            <p id="top" className={props.data.textColor}>{props.data.topText}</p>
            <p id="bottom" className={props.data.textColor}>{props.data.bottomText}</p>
           </div>
        </div>
    )
}