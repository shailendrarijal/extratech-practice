import { useState, useEffect } from 'react';

const PracticeApi = () => {

    const [values, setValues] = useState({});

    const getPracticeDataUsingFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then(json => setValues(json));
        
    }

    useEffect(() => {
        getPracticeDataUsingFetch();
    }, [])

    return (
        <div>
            <ul>
                <p>First: {values.title}</p>

            </ul>
        </div>
    )
}

export default PracticeApi;