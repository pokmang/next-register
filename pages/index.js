import Register from '../src/components/Register'
import Login from '../src/components/Login'
import User from '../src/components/User'

import styled from "styled-components";
import { useState } from 'react';


const StyledWrapper = styled.div`

.line{
    display: flex;
    justify-content: space-between;

}

.under{
    display: flex;
    padding : 20px ;

    
    


`

const userinfo = [
    {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo',
    firsname: 'mang',
    lastname: 'sulong',
    email: 'usman@gmail.com'
    },
 ]

const homepage = () => {

    const [newuser,setnewuser] = useState(userinfo)

    const handregister = (data) =>{

        newuser.push(data);
        setnewuser([...newuser])

    }

    const  [namelogin,setnamelogin] = useState()
    const  [passlogin,setpasslogin] = useState()

    const checklogin = (datalogin) =>{
    
        setnamelogin(datalogin.firsname) ;
        setpasslogin (datalogin.pass) ;

    }



    return (
        <StyledWrapper>
        

           <div className="line">
               
                  <div>
                    <Register handleregister ={handregister}/>
                  </div>


                  <div>
                    <Login  logins ={checklogin}/>
                  </div>
                
         </div> 
           


        <div className='under'>
            
                {
                    newuser.map((datauser, index) => (   
                        
                        <User key={index} username={datauser}

                            islogin = {namelogin === datauser.firsname && passlogin === datauser.pass}
                              
                        
                        />
                    ))

                }
                
        </div>
        
        

            
            

            





        </StyledWrapper>



    )
}

export default homepage;