import React from 'react'
import Button from '../components/Button'
import MainTitle from '../components/MainTitle';



const Login = () => {
    return (
        <div>
            <div>
                <MainTitle title='Login'></MainTitle>
            </div>
            <div className='form'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <Button title='Next'></Button>
                </form>
            </div>
        </div>
    )
}

export default Login
