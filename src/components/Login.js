import styled from "styled-components"
import { useState } from 'react';

const StyledWrapper = styled.div`

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
  border: 2px solid #00ff11;
  height: 45px;
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


    const [firsname, setfirsname] = useState('');
    const [pass, setpass] = useState('');


    const logins = () => {

        props.logins({ firsname, pass });
    }

    return (
        <StyledWrapper>

            <h1>log in</h1>

            <div class="form-group">
                <label className="sr-only" for="exampleInputEmail3">User name</label>
                <input type="email" class="form-control" id="exampleInputEmail3" placeholder="User name" onChange={(e) => setfirsname(e.target.value)}></input>
            </div>

            <div class="form-group">
                <label class="sr-only" for="exampleInputEmail3">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password"  onChange={(e) => setpass(e.target.value)}></input>
            </div>
            

            



            <p><Button onClick={logins} >login</Button></p>


        </StyledWrapper>








    )

}


export default Login;