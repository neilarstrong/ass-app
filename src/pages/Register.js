import logo from '../assets/img/logo.png'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Register(){

    const [fullname, setFullname] = useState();
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [email, setEmail] = useState();
    const [register, setRegister] = useState([]);

    useEffect( ()=>{
        const url = 'http://localhost/ass-app/db.php'; // link to db
        axios.get(url).then((response)=>{
            setRegister(response.data);
            console.log(register);
        })
    },[])

    const submitBtn = function(e){
        e.preventDefault();
        let getData = new FormData();
        getData.append('fullname',fullname); // key-value pairs
        getData.append('username',username);
        getData.append('pass',pass); 
        getData.append('email',email); 
        getData.append('function','insert'); 
        axios({
            method: 'POST', 
            url: 'http://localhost/ass-app/db.php',
            data: getData ,
            config: 'Content-Type = "multipart/form-data"'
        }).then(function() {
            // alert("Success");
            const url = 'http://localhost/ass-app/db.php'; // link to db
            axios.get(url).then((response)=>{
                setRegister(response.data);
                console.log(register);
            })
        }).catch(function() {
            alert("Error");
        });
        }

    return(
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form className="mx-1 mx-md-4">
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-person fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name = "fullname" id="fullname" className="form-control" value = {fullname} onChange = {(e) => setFullname(e.target.value)} />
                            <label className="form-label" >Your Full Name</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" name = "username" id="username" className="form-control" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
                            <label className="form-label" >Username</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name = "pass" id="pass" className="form-control" value = {pass} onChange = {(e) => setPass(e.target.value)}/>
                            <label className="form-label" >Password</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" name= "email" id="email" className="form-control" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                            <label className="form-label" >Your Email</label>
                          </div>
                        </div>
      
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" name = "submit" className="btn btn-dark btn-lg" onClick = {submitBtn}>Register</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src={logo} className="img-fluid" alt="Sample image"/>
      
                    </div>
                  </div>
                </div>
        
     
    )
}

export default Register;