import styled from "styled-components"
import { useState } from 'react';
import { useDispatch, connect } from "react-redux";
import Router from "next/router";

const StyledWrapper = styled.div`
.regis{
    
    cursor: pointer;
    &:hover{
        color: hotpink;
        background-color: #fff;
        
    }
  }
height: 500px;
border:1px solid rgba(0,0,0,1);
border-radius: 8px ;
width: 300px ;
margin : 30px;
padding : 10px ;
h1{
    display: flex
    justify-content: center;

}



`


const Button = styled.button`
  border-radius: 8px;
  margin-top: 40px;-
  border: 2px solid #00ff11;
  height: 50px;
  width: 110px;
  margin : 13px;
  font-size: 18px;
  color: #fff;
  background-color : #00ff11;
  cursor: pointer;
  &:hover{
      color: #00ff11;
      background-color: #fff;
      
  }

  
`

const Login = props => {

    const [firsname_regis, setfirsname_regis] = useState('');
    const [lastname_regis, setlastname_regis] = useState('');
    const [email_regis, setemail_regis] = useState('');
    const [pass_regis, setpass_regis] = useState('');
    const [imageUrl_regis, setimageUrl_regis] = useState('');

    const handlechargefile = e => {
        const reader = new FileReader();
        reader.onload = e => {
            setimageUrl_regis(e.target.result);
        }
        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0])
    }

    const { users, dispatch } = props;
    const handleregister = (data) => {

        dispatch(
            {
                type: 'CREATE_USER',
                payload: {
                    firsname: firsname_regis,
                    lastname: lastname_regis,
                    imageUrl: imageUrl_regis,
                    email: email_regis
                }
            })
    }


    const [firsname, setfirsname] = useState('');
    const [pass, setpass] = useState('');
    const [regis, setregis] = useState(1)

    const logins = () => {
        // props.logins({ firsname, pass });
        Router.push('/manage')
    }

    

    if (regis == 1) {
        return (
            <StyledWrapper>
                <h1>log in</h1>
                <div class="form-group">
                    <label className="sr-only" for="exampleInputEmail3">User name</label>
                    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="User name" onChange={(e) => setfirsname(e.target.value)}></input>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="exampleInputEmail3">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(e) => setpass(e.target.value)}></input>
                </div>
                <spen><Button onClick={logins} >login</Button></spen>
                <spen className="regis" onClick={() => setregis()}  >register</spen>
            </StyledWrapper>
        )

    }
    return (
        <StyledWrapper>
            <div className='contener'>
                <h1>Register</h1>
                <p>First Name</p>   <input type="text" placeholder="Your firsname" onChange={e => setfirsname_regis(e.target.value)}></input>
                <p>Last Name</p>    <input type="text" placeholder="Your lastname" onChange={e => setlastname_regis(e.target.value)}></input>
                <p></p>
                <p>E-mail</p>       <input type="text" placeholder="Your e-mail" onChange={e => setemail_regis(e.target.value)}></input>
                <p>Password</p>     <input type="password" placeholder="Your password" onChange={e => setpass_regis(e.target.value)}></input>
                <p>เลือกรูป<input type="file" id="myFile" accept="image/*" onChange={handlechargefile} ></input></p>
            
                <spen><Button onClick={handleregister} >Register</Button></spen>
                <spen className="regis" onClick={() => setregis(1)} >login</spen>

            </div>
        </StyledWrapper>

    )

}
export default connect(state => state.User)(Login);