
import React, {useEffect, useState}from "react"

export default function Meme(){
    const meme = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }


    const [memeState, setMemeState] = React.useState(meme)
    const [allMemeImages, setAllMemeImages] = React.useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setAllMemeImages(data.data.memes)
            })
    },[])

    function handleTextChange(event) {
        const {name, value} = event.target
        setMemeState(preData => {
            return {
                ...preData,
                [name]: value
            }
        })
    }
 
    function getNewImage(event){
        event.preventDefault()
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeState(preState => {
            return {
                ...preState,
                randomImage: url,
            }
        })

    } 
    return (
        <main>
            <form className="form">
                <input 
                    type="text" 
                    className="form--inputs"
                    placeholder="Top text"
                    name="topText"
                    value={memeState.topText}
                    onChange={handleTextChange}
                />
                <input 
                    type="text" 
                    className="form--inputs"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={memeState.bottomText}
                    onChange={handleTextChange}
                />
                <button 
                    className="form--button" 
                    onClick={getNewImage}
                >
                    Get a new meme image  🖼
                </button>
            </form>
            <div className="meme">
                <img src={memeState.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeState.topText}</h2>
                <h2 className="meme--text bottom">{memeState.bottomText}</h2>
            </div>
        </main>

    ) 
}