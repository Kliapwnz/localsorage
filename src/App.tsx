import React, {useState} from 'react';
import './App.css';


function App() {

    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(value))
    }
    const getFromLocalStorageHandler = () => {

    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
        </div>
    );
}

export default App;
