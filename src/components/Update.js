import styled from "styled-components"
import { connect } from "react-redux"
import { useState , useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'


const StyledWrapper = styled.div`

height: 500px;
border:1px solid rgba(0,0,0,1);
border-radius: 8px ;
width: 300px ;
margin : 30px;
padding : 10px ;



`

const Admin = props =>{
  
    const [formUpdate, setformUpdate] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }) ;
    const { users } = props ;

    useEffect(()=>{
        if(props.user){
            setformUpdate(formUpdate) ;
        }
        
    }, [props.user])
    
    const update = () => {
        const user = props.users.find(user => user.email === formUpdate.email);
        console.log(user);
        console.log(users);
        console.log(formUpdate);
        
        
        if(user){
            alert('Update Success')
            props.dispatch({type : 'UPDATE_USER' , payload: formUpdate });
        }else{
            alert('Not found user')
        }
        
    }
  



    return(
        <StyledWrapper>
        <div className='contener'>
        <h1>UPDATE</h1>
        <p>E-mail</p>       <input type="text" placeholder="Your e-mail" onChange={e => setformUpdate({...formUpdate, email: e.target.value})} value ={formUpdate.email}></input>
        <p>First Name</p>   <input type="text" placeholder="Your firsname" onChange={e => setformUpdate({...formUpdate,firstname: e.target.value})} value ={formUpdate.firstname}></input>
        <p>Last Name</p>    <input type="text" placeholder="Your lastname" onChange={e => setformUpdate({...formUpdate,lastname: e.target.value})} value ={formUpdate.lastname}></input>
        <p>Password</p>     <input type="password" placeholder="Your password" onChange={e => setformUpdate({...formUpdate,password: e.target.value})} value ={formUpdate.password}></input>
        <button onClick={update}>Update</button>


    </div>
    </StyledWrapper>
    )
}

export default connect(state => state.User) (Admin);