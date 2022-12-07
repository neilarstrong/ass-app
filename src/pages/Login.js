import {Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
// import axios from 'axios';
// import { useState, useEffect} from 'react'
// import {useNavigate} from 'react-router-dom'

function Login(){

    // const {username, setUsername} = useState();
    // const {password, setPassword} = useState();
    // const {db, setDb} = useState([]);
    // const navigate = useNavigate();


    // useEffect(() =>{
    // const url = 'http://localhost/ass-app/db.php'
    //     axios.get(url).then((response)=>{
    //         setDb(response.data);
    //         db.map((val)=>{
    //             return(
    //                 console.log(val.username)
    //             )
    //         })
    //     })

    // },[])

    // const subBtn = function(e){
    //     e.preventDefault();
    //     console.log(document.getElementById('username').value);
    //     console.log(document.getElementById('password').value);


    //     let getData = new FormData();
    // axios({
    //     method: 'POST',
    //     url:'http://localhost/ass-app/db.php',
    //     data: getData,
    //     config: 'Content-Type = "multipart/form-data"'
    // }).then(function(){
    //     const url = 'http://localhost/ass-app/db.php'
    //     axios.get(url).then((response) =>{
    //         setDb(response.data);
    //         db.map((val)=>{
    //             if ((val.username) == (document.getElementById('username').value) && (val.password) == (document.getElementById('password').value)){
    //                 return(
    //                     alert ('succes!'),
    //                     navigate('/home')
    //                 )
    //             }
    //         })
    //     })
    // })
    // }

    return(
        <div className="login-form">
    <form >
		<div className="avatar">
            <Link to="/">
			<img src={logo} alt="Avatar"/></Link>
		</div>
        <h2 className="text-center">Member Login</h2>   
        <div className="form-group">
        	<input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="pass" placeholder="Password" required="required"/>
        </div>        
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block"  >Sign in</button>
        </div>
		<div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <Link to="/register" className="pull-right">Signup Here</Link>
        </div>
    </form>

</div>

    )
}

export default Login;