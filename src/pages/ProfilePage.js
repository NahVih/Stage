import { React, useState } from 'react'
import MainTitle from '../components/MainTitle';
import { useHistory} from 'react-router-dom';
import ButtomBack from '../components/ButtomBack';
import AvatarPhotoProfile from '../components/AvatarPhotoProfile';

const ProfilePage = (props) => {

    const [name] = useState(props.location.state.name);
    const [mobile] = useState(props.location.state.mobile);
    const [zipCode] = useState(props.location.state.zipCode);
    const [suburb] = useState(props.location.state.suburb);
    const [city] = useState(props.location.state.city);
    const [state] = useState(props.location.state.state);
    const [date] = useState(props.location.state.date);
    const [gender] = useState(props.location.state.gender);
    const [email] = useState(props.location.state.email);



    let history = useHistory();


    return (
        <div>
            <div>
                <MainTitle title='Your Profile'></MainTitle>
                <ButtomBack history={history}></ButtomBack>
                <AvatarPhotoProfile></AvatarPhotoProfile>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <div className="mt-3">
                            <h4>{name}</h4>
                            <p className="font-size-sm">E-mail: {email}</p>
                            <p className="font-size-sm">Mobile: {mobile}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-bodyDetails">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 className="mb-0">Suburb</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {suburb}
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 className="mb-0">City</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {city}
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 className="mb-0">State</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {state}
                                </div>
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 className="mb-0">Zip Code</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {zipCode}
                                </div>
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 className="mb-0">Date of Birth</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {date}
                                </div>
                            </div>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h6 className="mb-0">Gender</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {gender}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
