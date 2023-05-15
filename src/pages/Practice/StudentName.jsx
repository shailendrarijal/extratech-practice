const StudentName = ({ index, names }) => {

    console.log('Index is::;', index);

    console.log('Names is::;', names);


    const studentArray = ['Manish', 'Ayush', 'Pragesh'];

    const getStudentName = (number) => {
        return studentArray[number];
    }

    return (
        <div>
            <p>Just index: {getStudentName(index)}</p>
        </div>
        )
}

export default StudentName;