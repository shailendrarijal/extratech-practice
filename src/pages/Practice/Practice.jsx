import './Practice.css';
import StudentName from './StudentName';

const Practice = () => {
    const names = ['Manish', 'Ayush', 'Pragesh']
    return (
        <div>
            <h1>Practice</h1>
            <div className="practice-container">
                <StudentName
                    index={0}
                    names={names}
                />
            </div>
        </div>
    )
}

export default Practice;