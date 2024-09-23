import { useEffect, useState } from "react";
import "./App.css";

function App() {
    let[joke,setjoke]=useState("")
    let url="https://official-joke-api.appspot.com/random_joke"
    useEffect(()=>{
      fetch(url)
      .then((response)=>{
        if(!response.ok) throw new Error("Network Error")
          return response.json();
      })
      .then((data)=>{
        const joke=data.setup
        const joke2=data.punchline
        const fulljoke=`joke:${joke} ${joke2}`
        setjoke(fulljoke)
      })
      .catch((error) => console.error("Error fetching the quote:", error));
    },[url])
    function fetchdata()
    {
      fetch(url)
      .then((response)=>{
        if(!response.ok) throw new Error("Network Error")
        return response.json();
      })
      .then((data)=>{
        const joke=data.setup
        const joke2=data.punchline
        const fulljoke=`joke:${joke} ${joke2}`
        setjoke(fulljoke)
      })
      .catch((error) => console.error("Error fetching the quote:", error));

    }
  return (
       <div>
          <h1>Joke fetcher</h1>
          <h2>{joke}</h2>
          <button onClick={fetchdata}>Fetch new Joke</button>
       </div>
  );
}

export default App;
