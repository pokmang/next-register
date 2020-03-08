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

`


const homepage = (props) => {
    const [show,setshow] = useState('logins') ;
    const {statusPageLogin} = props ;
    const change_page_login = () =>{

       let status = statusPageLogin
        props.dispatch({type : 'CHANGE_PAGE_LOGIN', payload: !status});
    }
    return(
        <div >
            {
                statusPageLogin ? <LoginFrom /> : <RegisterForm /> 
            }
            <spen className='btn' onClick={change_page_login}>
                  {statusPageLogin ? 'register' : 'logins'}
            </spen>
        </div>


    )
}

export default connect(state=>state.User)(homepage);