import styled from "styled-components";
import { useState } from 'react' ;
import Login from './Login'

const StyledWrapper = styled.div`
    border:1px solid rgba(0,0,0,1);
    border-radius: 8px ;
    width: 300px ;
    margin : 30px;
    padding : 10px ;
    .contener{
        h1,h4{
            display: flex
            justify-content: center;
        }


    }
    
    

`
const Button = styled.button`
  border-radius: 8px;
  border: 2px solid #00ff11;
  height: 45px;
  width: 150px;
  font-size: 18px;
  color: #fff;
  background-color : #00ff11;
  cursor: pointer;
  &:hover{
      color: #00ff11;
      background-color: #fff;
  }
`


const Register = props => {

    const [firsname , setfirsname] = useState ('');
    const [lastname , setlastname] = useState ('');
    const [email , setemail] = useState ('');
    const [pass , setpass] = useState ('');
    const [imageUrl , setimageUrl] = useState ('');

    const handlechargefile = e =>{
        const reader = new FileReader();

        reader.onload = e =>{
            setimageUrl(e.target.result);
        }

        if (e.target.files[0])
            reader.readAsDataURL(e.target.files[0])


    }

    const handleregister = () =>{

        props.handleregister({firsname,lastname,email,pass,imageUrl});
        
    }

    return (
        <StyledWrapper>
            <div className='contener'>


                
                <h1>Register</h1>
                <p>First Name</p>   <input type="text" placeholder="Your firsname" onChange ={e => setfirsname(e.target.value)}></input>
                <p>Last Name</p>    <input type="text" placeholder="Your lastname" onChange ={e => setlastname(e.target.value)}></input>
                <p></p>
                <p>E-mail</p>       <input type="text" placeholder="Your e-mail" onChange ={e => setemail(e.target.value)}></input>
                <p>Password</p>     <input type="password" placeholder="Your password" onChange ={e => setpass(e.target.value)}></input>
                <p>เลือกรูป<input type="file" id="myFile" accept="image/*" onChange ={ handlechargefile} ></input></p>
                <p><Button onClick={handleregister}>Register</Button></p>
                
            
            </div>


            

        </StyledWrapper>





    )

}

export default Register;

