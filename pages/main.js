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

    return(
        <div >
            {
                show === 'logins' ? <LoginFrom /> : <RegisterForm /> 
            }
             <div className='btn' onClick={() => setshow(show === 'logins' ? 'register' : 'logins')}>
                    {show === 'logins' ? 'register' : 'logins'}
                </div>
        </div>


    )
}

export default homepage;