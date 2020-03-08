import styled from "styled-components"
const StyledWrapper = styled.div`

height: 500px;
border:1px solid rgba(0,0,0,1);
border-radius: 8px ;
width: 300px ;
margin : 30px;
padding : 10px ;



`

const Admin = () =>{
    return(
        <StyledWrapper>
        <div className='contener'>
        <h1>UPDATE</h1>
        <p>First Name</p>   <input type="text" placeholder="Your firsname" ></input>
        <p>Last Name</p>    <input type="text" placeholder="Your lastname" ></input>
        <p>E-mail</p>       <input type="text" placeholder="Your e-mail" ></input>
        <p>Password</p>     <input type="password" placeholder="Your password" ></input>
        <p>เลือกรูป<input type="file" id="myFile" accept="image/*" ></input></p>
        <button>Update</button>


    </div>
    </StyledWrapper>
    )
}

export default Admin;