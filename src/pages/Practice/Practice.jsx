import { useState, useEffect } from 'react';
import './Practice.css';
import StudentName from './StudentName';
import countries from '../../data/country';

const Practice = () => {
    const names = ['Manish', 'Ayush', 'Pragesh']
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");
    const [nameList, setNameList] = useState("");
    const [countryList, setCountryList] = useState("");


    const handleClick = () => {
        setFullName(firstName + lastName);
    }

    const pickName = (e) => {
        setNameList(e.target.value);
    }
    const pickCountry = (e) => {
        setCountryList(e.target.value);
    }

    const getCountry = (country) => {
        return <option value={country.name}> {country.code}</option>

    }
    const getFilteredCountry = () => {
        const filteredCountry =  countries.filter(country => country.name.length < 5);
        console.log('The filtered countries are::', filteredCountry);
    }

    useEffect(() => {
        getFilteredCountry();
    }, []);
 
    return (
        <div>
            <h1>Practice</h1>
            <div className="practice-container">
                {/*<StudentName*/}
                {/*    index={0}*/}
                {/*    names={names}*/}
                {/*/>*/}
                <label htmlFor="first-name-input">FirstName: </label>
                <input
                    id="first-name-input"
                    type="text"
                    value={firstName}
                    name="first-name"
                    placeholder="Enter your first name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <label htmlFor="last-name-input">LastName: </label>
                <input
                    id="last-name-input"
                    type="text"
                    value={lastName}
                    name="last-name"
                    placeholder="Enter your last name"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <textarea onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
                <br />
                <select value={nameList} onChange={(e) => pickName(e)} >
                    {names.map(name => <option value={ name }>{ name }</option>)}
                </select>
                <br/>
                <select value={countries} onChange={(e) => pickCountry(e)} >
                    {countries.map((country) => getCountry(country))}
                </select>

                <br/>

                <button onClick={() => handleClick()}>Display</button>
                <p>Full name is: {fullName}</p>
                <p>Selected name is: {nameList}</p>
                <p>Selected country is: {countryList}</p>
            {/*    <p>Filtered country: {getFilteredCountry()}</p>*/}
            </div>
        </div>
    )
}

export default Practice;