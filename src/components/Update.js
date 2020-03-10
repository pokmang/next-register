import styled from "styled-components"
import { connect } from "react-redux"
import { useState } from 'react'; 
const StyledWrapper = styled.div`

height: 500px;
border:1px solid rgba(0,0,0,1);
border-radius: 8px ;
width: 300px ;
margin : 30px;
padding : 10px ;



`

const Admin = (props) =>{
    console.log(props);
    
    const [formUpdate, setformUpdate] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }) ;

    const handleChangFile = e =>{
        const reader = new FileReader();
            
    }

    console.log('tt',props.email);



    return(
        <StyledWrapper>
        <div className='contener'>
        <h1>UPDATE</h1>
        <p>First Name</p>   <input type="text" placeholder="Your firsname" onChange={e => setformUpdate({firstname: e.target.value})} ></input>
        <p>Last Name</p>    <input type="text" placeholder="Your lastname" onChange={e => setformUpdate({lastname: e.target.value})} ></input>
        <p>E-mail</p>       <input type="text" placeholder="Your e-mail" onChange={e => setformUpdate({email: e.target.value})} ></input>
        <p>Password</p>     <input type="password" placeholder="Your password" onChange={e => setformUpdate({password: e.target.value})} ></input>
        <button>Update</button>


    </div>
    </StyledWrapper>
    )
}

export default connect(state => state.User) (Admin);