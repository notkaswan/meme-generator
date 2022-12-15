import React from "react"

export default function Meme() {
    return (
        <form className="form">
            <input 
            type="text" 
            placeholder="Top text" className="form--input"/>
            <input type="text" placeholder="Bottom text" className="form--input"/>
            <button className="form--button">get a new meme image</button>
        </form>
    )
}