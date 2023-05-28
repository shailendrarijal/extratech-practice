import { useState, useEffect } from 'react';

const FetchDictionary = () => {

    const [meaning, setMeaning] = useState({
        word: '',
        origin: '',
        definition: ''
    });

    const [inputWord, setInputWord] = useState('');

    const fetchWordsFromDictionary = () => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + inputWord;

        fetch(url)
            .then(response => response.json())
            .then(json => {
                setMeaning({
                    word: json[0].word,
                    origin: json[0].origin,
                    definition: json[0].meanings[0].definitions[0].definition
                });
            });
    }

    return (
        <div>
            <input
                type="textbox"
                value={ inputWord }
                onChange={(e) => setInputWord(e.target.value)}
            />
            <button onClick={() => fetchWordsFromDictionary()} >Search</button>

            <h1>{meaning.word}</h1>
            <p>{meaning.origin}</p>
            <p>{meaning.definition}</p>

        </div>
    )
}

export default FetchDictionary;