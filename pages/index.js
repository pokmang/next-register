
import Login from '../src/components/Login'
import User from '../src/components/User'
import styled from "styled-components";
import { useState } from 'react';
import { connect } from "react-redux"
import Tapbar from '../src/components/Tapbar';




const StyledWrapper = styled.div`

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

    
    // const [newuser,setnewuser] = useState(userinfo)

    // const handregister = (data) =>{

    //     newuser.push(data);
    //     setnewuser([...newuser])

    // }

    // const  [namelogin,setnamelogin] = useState()
    // const  [passlogin,setpasslogin] = useState()

    // const checklogin = (datalogin) =>{
    
    //     setnamelogin(datalogin.firsname) ;
    //     setpasslogin (datalogin.pass) ;

    // }

    return (
        <StyledWrapper>
            
            <div >
                
                <Tapbar />
                <Login />    
            </div>
         
                
            
             
        </StyledWrapper>

    )
}

export default homepage;