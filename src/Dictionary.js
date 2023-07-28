import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

     function handleResponse(response) {
         setResults(response.data);
        }

    function search(event) {
        event.preventDefault();
    
        // documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=0f394coc58tc83ab43c50095f3bd3ad9`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    );
}