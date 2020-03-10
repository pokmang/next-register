import LoginFrom from '../src/components/Login'
import RegisterForm from '../src/components/Register'
import styled from "styled-components";
import { connect } from "react-redux" ;
import firebase from '../src/firebase' ;
import { useEffect } from 'react';




const StyledWrapper = styled.div `

.wrap{
    border:1px solid rgba(0,0,0,1);
    border-radius: 8px ;
    height: 540px;
    width: 350px ;
    margin : 30px;
}

.btn{
    cursor: pointer;
    margin-top : 395px;
    margin-left: 150px;    

}
.page{
    display: flex
    justify-content: center;
}

`


const homepage = (props) => {

    useEffect(()=>{
        firebase.firestore().collection('user').get().then(snapshot =>{
            snapshot.forEach((res)=>{
                console.log(res.data());
                
            })
        })
            console.log('test');
            
    },[])

    const {statusPageLogin} = props ;
    const change_page_login = () =>{

       let status = statusPageLogin
        props.dispatch({type : 'CHANGE_PAGE_LOGIN', payload: !status});
    }
    return(
        <StyledWrapper>
        <div className="wrap">
            {
                statusPageLogin ? <LoginFrom /> : <RegisterForm /> 
            }
            <div className="page">
            <spen className='btn' onClick={change_page_login}>{statusPageLogin ? 'register' : 'logins'}</spen>
            </div>
        </div>
        </StyledWrapper>

    )
}

export default connect(state=>state.User)(homepage);