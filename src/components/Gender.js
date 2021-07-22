import { React, useState } from 'react'


const Gender = ({ handlerGender }) => {

    const [gender, setGender] = useState('DEFAULT');

    return (

        <div>
            <select onChange={(e) => { setGender(e.target.value); handlerGender(e.target.value) }} value={gender} id="inputState" className="form-control">
                <option value="DEFAULT" disabled>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Not Disclosed</option>
            </select>
        </div>
    )
}

export default Gender
