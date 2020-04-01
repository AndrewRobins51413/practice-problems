import React from "react"
import JokeOne from "./components/JokeOne"

function App(){
    return(
        <div className="jokecard">
            <JokeOne 
                question= "Why did the chicken cross the road?"
                punchline= "it was stapled to the punk-rocker"
                 />
                 <br />
            <JokeOne 
                question= "Why do elephants have flat feet?"
                punchline= "for stamping out burning ducks"
                 />
                 <hr />
            <JokeOne 
                question= "Did you hear about the mathmatician who is afraid of asymtotes? ?"
                punchline= "He'll stop at nothing to avoid them!"
                 />
            <JokeOne 
                question= "What's you favorite thing about Switzerland?"
                punchline= "I'm not sure, but its flag is a big plus."
                 />
            <JokeOne 
                question= ""
                punchline= "It's impossible to explain puns to a kleptomaniac, they take everything literally"
                 />
        </div>
    )
}

export default App