import { useState } from "react";

import React from "react";

function App() {
  const [color, setColor] = useState("#212121");

  return (
    <>
      <div style={{ backgroundColor: `${color}` }}>
   
        <div >
          <h1> Color changer</h1>
        </div>
  
        <div className="fixed bottom-12 inset-x-0 flex justify-center">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-4 py-3 rounded-xl">
            <button
              onClick={() => {
                //   console.log("clicked red")
                setColor("red");
              }}
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                //   console.log("clicked black")
                setColor("black");
              }}
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() =>{ setColor("yellow")

                document.body.style.backgroundColor = color
              }

              }
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("purple")}
              className="px-4 py-2 rounded-lg text-white"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
