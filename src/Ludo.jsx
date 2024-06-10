import { useState } from "react";

export default function Ludo() {
    let [move, setMove] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        setMove((premove) => {
            return({...premove, blue: premove.blue + 1})
        })
        setArr((prevArr) => {
            return [...prevArr, " blue moves "];
        });
    }

    let updateYellow = () => {
        setMove(() => {
            return({...move, yellow: move.yellow + 1})
        })
    }
    let updateGreen = () => {
        setMove(() => {
            return({...move, green: move.green + 1})
        })
    }
    let updateRed = () => {
        setMove(() => {
            return({...move, red: move.red + 1})
        })
    }

  return (
    <div>
      <p>{arr}</p>
      <p>Blue moves: {move.blue}</p>
      <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
      <p>Yellow moves: {move.yellow}</p>
      <button onClick={updateYellow} style={{backgroundColor: "yellow"}}>+1</button>
      <p>Green moves: {move.green}</p>
      <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
      <p>Red moves: {move.red}</p>
      <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
    </div>
  );
}
