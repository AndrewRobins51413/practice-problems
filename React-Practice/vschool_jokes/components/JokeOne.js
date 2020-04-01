import React from "react"

function JokeOne(props){
    
    const styles = {
        fontSize: 14
            }
    
    return(
    <div>
        <h3 style = {{display: props.question ? "block" : "none"}}> Question: {props.question}</h3>
        <h3 style = {{backgroundColor: props.question ? "lightBlue" : "lightYellow"}}>Punchline: {props.punchline}</h3>
    </div>
    
    )
}

export default JokeOne