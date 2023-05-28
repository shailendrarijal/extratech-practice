import { useState, useEffect } from 'react';
import './Practice.css';
import StudentName from './StudentName';
import countries from '../../data/country';
import PracticeApi from './PracticeApi';
import FetchDictionary from './FetchDictionary';
import PracticeContext from './PracticeContext';
import PracticeThemeContext from './PracticeThemeContext';


const Practice = () => {

    const names = ['Manish', 'Ayush', 'Pragesh']
    //const [firstName, setFirstName] = useState("");
    //const [lastName, setLastName] = useState("");
    //const [fullName, setFullName] = useState("");
    //const [message, setMessage] = useState("");
    //const [nameList, setNameList] = useState("");
    //const [countryList, setCountryList] = useState("");

    //const [info, setInfo] = useState({
    //    firstName: "",
    //    lastName: "",
    //    gender: ""
    //})
    //const [declared, setDeclared] = useState({
    //    firstCheckbox: false,
    //    secondCheckbox: false,
    //});

    //const [values, setValues] = useState(initialInfo)


    //const handleClick = () => {
    //    setFullName(initialInfo.firstName + initialInfo.lastName);
    //}

    //const pickName = (e) => {
    //    setNameList(e.target.value);
    //}
    //const pickCountry = (e) => {
    //    setCountryList(e.target.value);
    //}

    //const getCountry = (country) => {
    //    return <option value={country.name}> {country.code}</option>

    //}
    //const getFilteredCountry = () => {
    //    const filteredCountry =  countries.filter(country => country.name.length < 5);
    ////    console.log('The filtered countries are::', filteredCountry);
    //}

    //const handleInputChange = (e) => {
    //    const { name, value } = e.target;

    //    setInfo({ ...info, [name]: value });
    //}

    //const handleCheckboxChange = (e) => {
    //    console.log("Event is::", e);

    //    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //    setDeclared({ ...declared, [e.target.name]: value})
    //}

    //useEffect(() => {
    //    getFilteredCountry();
    //}, []);
 
    return (
        <div>
            <h1>Practice</h1>
            <div className="practice-container">
                {/*<PracticeApi />*/}
                {/*<FetchDictionary />*/}
                {/*    <PracticeContext />*/}
                <PracticeThemeContext />
            </div>

            {/*<form className="practice-container">*/}
            {/*    */}{/*<StudentName*/}
            {/*    */}{/*    index={0}*/}
            {/*    */}{/*    names={names}*/}
            {/*    */}{/*/>*/}
            {/*    <label htmlFor="first-name-input">FirstName: </label>*/}
            {/*    <input*/}
            {/*        id="first-name-input"*/}
            {/*        type="text"*/}
            {/*        value={info.firstName}*/}
            {/*        name="firstName"*/}
            {/*        placeholder="Enter your first name"*/}
            {/*        onChange={handleInputChange}*/}
            {/*    />*/}
            {/*    <br />*/}
            {/*    <label htmlFor="last-name-input">LastName: </label>*/}
            {/*    <input*/}
            {/*        id="last-name-input"*/}
            {/*        type="text"*/}
            {/*        value={info.lastName}*/}
            {/*        name="lastName"*/}
            {/*        placeholder="Enter your last name"*/}
            {/*        onChange={handleInputChange}*/}
            {/*    />*/}
            {/*    */}{/*<br />*/}
            {/*    */}{/*<textarea onChange={(e) => setMessage(e.target.value)}>{message}</textarea>*/}
            {/*    */}{/*<br />*/}
            {/*    */}{/*<select value={nameList} onChange={(e) => pickName(e)} >*/}
            {/*    */}{/*    {names.map(name => <option value={ name }>{ name }</option>)}*/}
            {/*    */}{/*</select>*/}
            {/*    */}{/*<br/>*/}
            {/*    */}{/*<select value={countries} onChange={(e) => pickCountry(e)} >*/}
            {/*    */}{/*    {countries.map((country) => getCountry(country))}*/}
            {/*    */}{/*</select>*/}

            {/*    */}{/*<br/>*/}
            {/*    <br />*/}
            {/*    <fieldset>*/}
            {/*        <legend>Gender</legend>*/}
            {/*        <label>Male: </label>*/}
            {/*        <input*/}
            {/*            type="radio"*/}
            {/*            name="gender"*/}
            {/*            onChange={handleInputChange}*/}
            {/*            value="Male"*/}
            {/*        />*/}
            {/*        <label>Female: </label>*/}
            {/*        <input*/}
            {/*            type="radio"*/}
            {/*            name="gender"*/}
            {/*            onChange={handleInputChange}*/}
            {/*            value="Female"*/}
            {/*        />*/}
            {/*    </fieldset>*/}

            {/*    <br />*/}
                {/*<fieldset>*/}
                {/*    <legend>Declarations: </legend>*/}
                {/*    <label>Privacy declaration:</label>*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="firstCheckbox"*/}
                {/*        onChange={handleCheckboxChange}*/}
                {/*/>*/}
                {/*<br/>*/}
                {/*    <label>Mailing declaration:</label>*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="secondCheckbox"*/}
                {/*        onChange={handleCheckboxChange}*/}
                {/*    />*/}
                {/*<p>The first checkbox is {declared.firstCheckbox ? 'checked' : 'unchecked'} </p>*/}
                {/*<p>The second checkbox is {declared.secondCheckbox ? 'checked' : 'unchecked'} </p>*/}

                {/*</fieldset>*/}





            {/*    */}{/*<button onClick={handleClick}>Display</button>*/}
            {/*    <p>Full name is: {info.firstName} {info.lastName}</p>*/}
            {/*    <p>Gender is: {info.gender}</p>*/}

            {/*    */}{/*<p>Selected name is: {nameList}</p>*/}
            {/*    */}{/*<p>Selected country is: {countryList}</p>*/}
            {/*    <p>Filtered country: {getFilteredCountry()}</p>*/}
            {/*</form>*/}
            {/*<StudentName names={names} />*/}


        </div>
    )
}

export default Practice;