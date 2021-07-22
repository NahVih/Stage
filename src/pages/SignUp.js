import { React, useState } from 'react'
import DateP from '../components/Date'
import Gender from '../components/Gender'
import Button from '../components/Button'
import MainTitle from '../components/MainTitle';
import { useHistory} from 'react-router-dom';
import ButtomBack from '../components/ButtomBack';





const SignUp = () => {

    const [date, setStartDate] = useState('');
    const [gender, setGender] = useState('DEFAULT');
    const [email, setEmail] = useState('');


    let history = useHistory();


    function handleClick() {
        history.push({
            pathname: "/CreateNewProfile",
            state: {
                date: date,
                gender: gender,
                email: email,
            }
        })
    }
    const handler = (startDate, gender) => {
        setStartDate(startDate)
        setGender(gender)

    }

    const handlerGender = (gender) => {
        setGender(gender)

    }

    return (
        <div>
            <div>
                <MainTitle title='Create Account'></MainTitle>
                <ButtomBack history={history}></ButtomBack>
            </div>
            <div className='form'>
                <form>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Create a password</label>
                        <input type="password" className="form-control" id="InputPassword"></input>
                    </div>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="form-group">
                                <label htmlFor="InputDob">Date of Birth</label>
                                <DateP handler={handler}></DateP>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="form-group">
                                <label htmlFor="InputDob">Gender</label>
                                <Gender handlerGender={handlerGender}></Gender>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleClick} title='Next'></Button>
                </form>
            </div>
        </div >
    )
}

export default SignUp
