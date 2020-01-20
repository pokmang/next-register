import styled from "styled-components"
import { useState } from 'react';

const StyledWrapper = styled.div`

border:1px solid rgba(0,0,0,1);
border-radius: 8px ;
width: 200px ;
padding : 10px ;
h1{
    display: flex
    justify-content: center;

}



`


const Button = styled.button`

  border-radius: 8px;
  color: black;
  background-color : #00ff11;
  cursor: pointer;
  &:hover{
      background-color:rgba(0,0,0,.15)
  }
`

const Login = props => {


    const [firsname, setfirsname] = useState('');
    const [pass, setpass] = useState('');


    const logins = () =>{

        props.logins({firsname,pass}) ;
    }

    return (
        <StyledWrapper>

            <h1>log in</h1>
            <p>Username</p>
            <input type="text" onChange={(e) => setfirsname(e.target.value)}></input>
            <p>Password</p>
            <input type="password" onChange={(e) => setpass(e.target.value)}></input>

            <p><Button onClick = {logins} >login</Button></p>


        </StyledWrapper>







    )

}


export default Login;