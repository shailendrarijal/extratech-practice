const StudentName = ({ index, names }) => {

    const getStudentName = () => {
        const students = names.map(name => {
            console.log(name);
            return <p>{name}</p>
        });
        console.log(students);
        return students;
    }

    // If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order
    const getSortedStudentName = () => {
        const students = names.sort().map(name => {
            console.log(name);
            return <p>{name}</p>
        });
        console.log(students);
        return students;
    }

    const cars = [
        { company: "Toyota", value: 21 },
        { company: "Subaru", value: 37 },
        { company: "Mazda", value: 45 },
        { company: "BMW", value: -12 },
        { company: "Mercedes", value: 13 },
        { company: "MG", value: 37 },
    ];

    const getSortedCarsByValue = (cars) => {

        let sortedCarsByValue = cars.sort((a, b) => a.value - b.value);
        console.log(sortedCarsByValue);
        return sortedCarsByValue.map(car => {
            return <p>{ car.value }</p>
        })
    }

    const getSortedCarsByCompany = (cars) => {

        // 
        let sortedCarsByCompany = cars.sort((a, b) => {
            const nameA = a.company.toUpperCase();
            const nameB = b.company.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        console.log(sortedCarsByCompany);
        return sortedCarsByCompany.map(car => {
            return <p>{car.company}</p>
        })
    }

    return (
        <div>
            <div>
                <p>The sorted student names are:</p>
                <ul>
                    {getSortedStudentName()}

                </ul>
            </div>
            <div>
                <p>The sorted car values are:</p>
                <ul>
                    {getSortedCarsByValue(cars)}

                </ul>
            </div>
            <div>
                <p>The sorted car Company are:</p>
                <ul>
                    {getSortedCarsByCompany(cars)}

                </ul>
            </div>
        </div>
        )
}

export default StudentName;