import { useState } from "react"

export default function Batsman() {
    let [runs, setRuns]= useState(0)
    const handleSingle = ()=>{
        const updatedRuns = runs+1;
        setRuns(updatedRuns);
        // runs = updatedRuns;
    }
    const handleFour = ()=>{
        const updatedRuns = runs+4;
        setRuns(updatedRuns);
    }
    const handleSix = ()=>{
        const updatedRuns = runs+6;
        setRuns(updatedRuns);
    }
    return (
      <div>
        <h3>Player: Bangla batsman</h3>
        {
            runs>50 && <p>Your Score: 50</p>
        }
        <h1>Score: {runs}</h1>
        <button onClick={handleSingle}>Singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    );
}