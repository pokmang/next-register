import styled from "styled-components"
import { useState } from 'react';
import { useDispatch, connect } from "react-redux";
import Router from "next/router";

const StyledWrapper = styled.div`



.form-group{
    margin: 20px;
    padding : 10px ;
    height: 20px;
    width: 300px;
}
h1{
    display: flex
    justify-content: center;

}



`

const Button = styled.button`
  border-radius: 8px;
  margin-top: 40px;-
  border: 2px solid #00ff11;
  height: 40px;
  width: 90px;
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

const LoginFrom = props => {

    const [formData,setfromData] = useState({
        email: '',
        password: ''
    })

    const logins = () => {
        const user = props.users.find(user => user.email === formData.email && user.password === formData.password);
        if(user){
            alert('Login Success')
            props.dispatch({type : 'LOGIN' , payload: user });
            Router.push('/Profile')
        }else{
            alert('Not found user')
        }
        
    }
        return (
            <StyledWrapper>
                <h1>log in</h1>
                <div class="form-group">
                    <label className="sr-only" for="exampleInputEmail3">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(e) => setfromData({...formData,email: e.target.value})}></input>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="exampleInputEmail3">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(e) => setfromData({...formData,password: e.target.value})}></input>
                </div>
                <spen><Button onClick={logins} >login</Button></spen>
    
            </StyledWrapper>
        )

}
export default connect(state => state.User)(LoginFrom);