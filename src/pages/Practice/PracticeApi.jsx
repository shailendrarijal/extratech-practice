const PracticeApi = () => {

    let value = {};

    const getPracticeData = () => {
        value = fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                console.log(response.json());
                return response.json();
            })
        
    }

    return (
        <div>
            <ul>
                <p>{getPracticeData() }</p>
            </ul>
        </div>
    )
}

export default PracticeApi;