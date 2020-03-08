import LoginFrom from '../src/components/Login'
import RegisterForm from '../src/components/Register'
import styled from "styled-components";
import { useState } from 'react';
import { connect } from "react-redux"
import Tapbar from '../src/components/Tapbar';




const StyledWrapper = styled.div `

.btn{
    cursor: pointer;
}
.line{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
 

}

.under{
    display: flex;
    padding : 20px ;

    
    


`


const homepage = (props) => {
    const [show,setshow] = useState('logins') ;
    const {statusPageLogin} = props ;
    const change_page_login = () =>{
        console.log(statusPageLogin);
       let status = statusPageLogin
        props.dispatch({type : 'CHANGE_PAGE_LOGIN', payload: !status});
    }
    return(
        <div >
            {
                statusPageLogin ? <LoginFrom /> : <RegisterForm /> 
            }
             <div className='btn' onClick={change_page_login}>
                    {statusPageLogin ? 'register' : 'logins'}
                </div>
        </div>


    )
}

export default connect(state=>state.User)(homepage);