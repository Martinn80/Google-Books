import React, { useState } from "react";
import axios from "axios";
function App() {
    // const [appState, setState] = useState("search");
    const [apiResult, setApiResult] = useState([]);
    const [book, setBook] = useState("javascript");
    const [apiKey, setApiKey] = useState(
        "AIzaSyDXACRl1P7IIf-tyD7IxXwSke59bKQLi4o"
    );
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`;

    const handleChange = e => {
        const book = e.target.value;
        setBook(book);
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get(apiUrl)
            .then(res => {
                console.log(res.data.items);
                setApiResult(res.data.items);
            })
            .catch(err => console.error(err));
    };
    return (
        <div className="App">
            <h1>GoogleBooks</h1>
            <hr />
            <input onChange={handleChange} className="form-control" type="text" />
            <button onClick={handleSubmit} className="btn btn-primary">submit</button>
            <ul style={{ backgroundColor: "#3e4c5e" }}>
                {apiResult.map(book =>
                    <li key={book.id} style={{ display: "inline" }}>
                        <a href={book.volumeInfo.previewLink}>
                            <img src={book.volumeInfo.imageLinks.thumbnail} style={{ backgroundColor: "white", border: "solid 3px #000", padding: "10px", margin: "10px" }}></img>
                        </a>
                    </li>
                )}</ul>
        </div>


    );
}
export default App;