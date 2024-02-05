import {useState} from 'react';
import './UseState.css';

const UseState = () => {
  console.log(useState('Light'));
  const [theme, setTheme] = useState('Light');
  let [count, setCount] = useState(0);
  return (
    <div className={theme + " " + "state"}>
      <h1>UseState Component</h1>
      <button
        onClick={() => {
          if(theme == 'Light') {
            setTheme('Dark');
          } else {
            setTheme('Light');
          }
        }
        }
        >{theme}</button>
      <h2>{count}</h2>
      <button
        onClick={() => 
          setCount((prevCount) => prevCount + 1)
        }
      >
        Increment
      </button>
      <button
        onClick={() => 
          setCount((prevCount) => prevCount - 1)
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;