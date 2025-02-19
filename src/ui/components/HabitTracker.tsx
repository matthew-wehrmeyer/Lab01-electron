import {useState} from 'react';
interface Habit {
    id: number;
    text: string;
    Date: string;
}

function HabitTable() {
    const [HabitTable, setHabitTable] = useState<Habit[]>([]);
    const [newHabitTxt, setNewHabit] = useState('');
    const newDateTxt = new Date();

    // Helps determine month & day names to make my own format
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // Will grab the date to be a readable string that I can grab the
    // substring for the local timezone, a bit long, but can't do easy conversion
    let timeTxt = newDateTxt.toString();
    let timeZone = timeTxt.substring(33); 
    
    const dateFormat = dayNames[newDateTxt.getDay()] + " "
                     + monthNames[newDateTxt.getMonth()] + " "
                     + newDateTxt.getDate() + " "
                     + newDateTxt.getHours() + ":"
                     + newDateTxt.getMinutes() + ":"
                     + newDateTxt.getSeconds() + " "
                     + newDateTxt.getFullYear() + " "
                     + timeZone;

    const handleAddHabit = () => {
        if (newHabitTxt.trim() !== '') {
            const newHabit : Habit = {
                id: HabitTable.length + 1,
                text: newHabitTxt,
                Date: dateFormat,
            };
            setHabitTable([...HabitTable, newHabit]);
            setNewHabit('');
        } 
    };
    return (
        <div className="habitTracker">
            <h1 className="TitleHabit">Habit Tracker</h1>
            <table>
                <thead>
                    <tr>
                        <th>Habit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {HabitTable.map((habit) => (
                        <tr key={habit.id}>
                            <td>{habit.text}</td>
                            <td>{habit.Date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="habitInput">
                <input className="habitTxtBox" 
                    name="HabitIn" 
                    type="text"
                    value={newHabitTxt}
                    onChange={(e) => setNewHabit(e.target.value)}
                    placeholder="Enter latest habit"
                />
                <div className="habitButton">
                    <button className="btn btn-primary" onClick={handleAddHabit}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default HabitTable;