import "./index.css";
import React from "react";
import { useState } from "react";

export default function TicTacToe() {
  //FUNCTIONS//

  const [turn, setturn] = useState("X");
  const [cell, setcell] = useState(Array(9).fill(""));
  const [winner, setwinner] = useState('')

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 2, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for(let combo in combos){
        combos[combo].forEach((pattern)=>{
           if( 
            squares[pattern[0]]==='' ||
            squares[pattern[1]]==='' ||
            squares[pattern[2]]===''  ) {}
            else if(
                squares[pattern[0]]=== squares[pattern[1]] &&
                squares[pattern[1]]=== squares[pattern[2]]
            )
            {
                setwinner(squares[pattern[0]])
            }
        })
    }
  };

  const handleClick = (num) => {
    if (cell[num] !== "") {
      alert("Already Clicked");
      return;
    }

    let squares = [...cell];

    if (turn === "X") {
      squares[num] = "X";
      setturn("O");
    } else {
      squares[num] = "O";
      setturn("X");
    }
    checkForWinner(squares)
    setcell(squares);
  };

  const handleRestart=()=>{
    setwinner(null)
    setcell(Array(9).fill(''));
  }

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cell[num]}</td>;
  };

  //RETURN ELEMENT//
  return (
    <main>
      <section>
        <div>
          <h3 className="turn">Turn: {turn}</h3>
          <table>
            <tbody>
              <tr>
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
              </tr>

              <tr>
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
              </tr>

              <tr>
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
              </tr>
            </tbody>
          </table>
          {winner && (
            <>
                <p className="turn">{winner} is the winner!</p>
                <button className="btn" onClick={()=> handleRestart()}>Play Again</button>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
