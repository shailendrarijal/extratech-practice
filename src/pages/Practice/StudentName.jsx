const StudentName = ({ index, names }) => {

    const getStudentName = () => {
        const students = names.map(name => {
            console.log(name);
            return <p>{name}</p>
        })
        console.log(students);
        return students;
    }



    return (
        <div>
            <ul>
                {getStudentName()}
            </ul>
            
        </div>
        )
}

export default StudentName;