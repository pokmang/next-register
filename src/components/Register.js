import { connect } from 'react-redux' ;
import { useState } from 'react' ;
import styled from "styled-components"

const StyledWrapper = styled.div`
.regis{
    
    cursor: pointer;
    &:hover{
        color: hotpink;
        background-color: #fff;
        
    }
  }
height: 500px;
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
  margin-top: 40px;-
  border: 2px solid #00ff11;
  height: 50px;
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

const RegisterForm = (props) => {
    const [imageUrl, setimageUrl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo');
    const [formData, setformData] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
    }) ;
    const {statusPageLogin} = props ;

    const handlechargefile = e => {
        const reader = new FileReader();
        reader.onload = e => {
            setimageUrl(e.target.result);
        }
        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0])
    }

    const createUser = () =>{
        let status = statusPageLogin
        
        props.dispatch({type: 'CREATE_USER',payload: {...formData,imageUrl}})
        props.dispatch({type : 'CHANGE_PAGE_LOGIN', payload: !status});
        
    } 

    return (
        <StyledWrapper>
            <div className='contener'>
                <h1>Register</h1>
                <p>First Name</p>   <input type="text" placeholder="Your firsname" onChange={e => setformData({...formData,firstname: e.target.value})}></input>
                <p>Last Name</p>    <input type="text" placeholder="Your lastname" onChange={e => setformData({...formData,lastname: e.target.value})}></input>
                <p>E-mail</p>       <input type="text" placeholder="Your e-mail" onChange={e => setformData({...formData,email: e.target.value})}></input>
                <p>Password</p>     <input type="password" placeholder="Your password" onChange={e => setformData({...formData,password: e.target.value})}></input>
                <p>เลือกรูป<input type="file" id="myFile" accept="image/*" onChange={handlechargefile} ></input></p>
                <spen><Button onClick={createUser} >Register</Button></spen>
        

            </div>
        </StyledWrapper>

    )

}
export default connect((state)=> state.User)(RegisterForm) ;