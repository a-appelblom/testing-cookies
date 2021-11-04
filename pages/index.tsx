import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [inputState, setInputState] = useState("");
  const [counter, setCounter] = useState(0);
  const [storageState, setStorageState] = useState({});

  return (
    <div>
      <div>
        <button
          onClick={async () => {
            if (document) {
              document.cookie = "test=Sweet tasty little cookie";
              document.cookie = "test2=Sweet tasty little cookie number 2";

              const res = await fetch("/api/hello");
              const data = await res.json();
              console.log(data);
            }
          }}
        >
          Click me for cookies
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (window) {
              window.localStorage.setItem(JSON.stringify(counter), inputState);
            }
            setCounter((counter) => counter + 1);
            setInputState("");
          }}
        >
          <input
            type="text"
            data-test="test-input"
            className="myInput"
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            Click me to set storage
          </button>
        </form>
        <button
          onClick={() => {
            console.log("click");
            // if (window) {
            for (let i = 0; i < counter; i++) {
              console.log("for");
              setStorageState((prevState) => {
                console.log(
                  window.localStorage.getItem(JSON.stringify(i)),
                  counter
                );
                let newState: any = { ...prevState };
                newState[i] = window.localStorage.getItem(JSON.stringify(i));
                return newState;
              });
              // }
            }
          }}
        >
          Click me to see localstorage
        </button>
        <div>
          <pre>{JSON.stringify(storageState)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
