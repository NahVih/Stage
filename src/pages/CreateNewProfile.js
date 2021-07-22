import { React, useState } from 'react'
import Button from '../components/Button'
import MainTitle from '../components/MainTitle';
import { useHistory} from 'react-router-dom';
import ButtomBack from '../components/ButtomBack';
import AvatarPhotoProfile from '../components/AvatarPhotoProfile';




const CreateNewProfile = (props) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [suburb, setSuburb] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [date] = useState(props.location.state.date);
    const [gender] = useState(props.location.state.gender);
    const [email] = useState(props.location.state.email);

    let history = useHistory();


    function handleClick() {
        history.push({
            pathname: "/ProfilePage",
            state: {
                name: name,
                mobile: mobile,
                zipCode: zipCode,
                suburb: suburb,
                city: city,
                state: state,
                date: date,
                gender: gender,
                email: email,
            }
        }
        )
    }

    return (
        <div>
            <div>
                <MainTitle title='Create New Profile'></MainTitle>
                <ButtomBack history={history}></ButtomBack>
                <AvatarPhotoProfile></AvatarPhotoProfile>
            </div>
            <div className='form'>
                <form>
                    <div className="form-group">
                        <label htmlFor="InputName">Name</label>
                        <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="InputName" value={name}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputMobile">Mobile</label>
                        <input onChange={(e) => { setMobile(e.target.value) }} value={mobile} placeholder="Example: 0421-111-111" type="tel" className="form-control" id="InputMobile" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"></input>
                    </div>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="form-group">
                                <label htmlFor="InputZipCode">Zip Code</label>
                                <input onChange={(e) => { setzipCode(e.target.value) }} value={zipCode} type="tel" className="form-control" id="InputZipCode" pattern="[0-9]{4}" size="5"></input>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="form-group">
                                <label htmlFor="InputSuburb">Suburb</label>
                                <input onChange={(e) => { setSuburb(e.target.value) }} value={suburb} type="text" className="form-control" id="InputSuburb" size="5"></input>
                            </div>
                        </div>

                    </div>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="form-group">
                                <label htmlFor="inputState">State</label>
                                <select defaultValue={'DEFAULT'} onChange={(e) => { setState(e.target.value) }} id="inputState" className="form-control">
                                    <option value="DEFAULT" disabled>State</option>
                                    <option >ACT</option>
                                    <option>NSW</option>
                                    <option>NT</option>
                                    <option>Qld</option>
                                    <option>SA</option>
                                    <option>Vic</option>
                                    <option>Tas</option>
                                    <option>WA</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="form-group">
                                <label htmlFor="InputCity">City</label>
                                <input onChange={(e) => { setCity(e.target.value) }} value={city} type="text" className="form-control" id="InputCity" size="5"></input>
                            </div>
                        </div>

                    </div>
                    <Button onClick={handleClick} title='Create'></Button>
                </form>
            </div>

        </div>
    )
}

export default CreateNewProfile
