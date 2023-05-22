import { useState, useEffect } from 'react';

const PracticeApi = () => {

    const [values, setValues] = useState({
        completed: false,
        id: 0,
        title: "title",
        userId: 0
    });

    const getPracticeataUsingFetch = () => {
        const test = fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then(json => setValues(json));
    }

    useEffect(() => {
        getPracticeataUsingFetch();
    }, []);


    return (
        <div>
            <div>
                <p>Completed: {values.completed ? "true" : "false"}</p>
                <p>Id: {values.id}</p>
                <p>Title: {values.title}</p>
                <p>UserId: {values.userId}</p>
            </div>
        </div>
        )
}

export default PracticeApi;