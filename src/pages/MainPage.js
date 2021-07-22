import Button from '../components/Button';
import { useHistory} from 'react-router-dom';
import Login from './Login'


function MainPage() {

    let history = useHistory();
  
  
    function handleClick() {
      history.push("/SignUp");
    }
  
    return (
        <div >
          <Login></Login>
          <Button onClick={handleClick} title='Create New Account'></Button>
        </div>
    );
  }
  
  export default MainPage;