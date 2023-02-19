import React from "react"
import memesData from "../memesData"

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

export default function Meme(){
    const meme = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    const [memeState, setMemeState] = React.useState(meme)
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getNewImage(e){
        e.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeState(preState => {
            return {
                ...preState,
                randomImage: url
            }
        })

    } 
    return (
        <main>
            <form className="form">
                <input type="text" className="form--inputs"/>
                <input type="text" className="form--inputs"/>
                <button className="form--button" onClick={getNewImage}>Get a new meme image  🖼</button>
            </form>
            <div className="">
                <img src={memeState.randomImage}/>
            </div>
        </main>

    ) 
}