import styled from "styled-components";

const StyledWrapper = styled.div`
    border:1px solid rgba(0,0,0,1);
    border-radius: 8px ;
    width: 200px ;
    padding : 10px ;
    margin : 15px;

    ${props => props.islogin && `
    border:1px solid rgba(255,0,0,1);
    `}
    
   

`

const User = props => {

    const { imageUrl, firsname, lastname, email } = props.username;
    console.log(props.islogin)

    return (
        <StyledWrapper islogin = {props.islogin}>
            <div>
                <img src={imageUrl} width= '50%' height= '50%' />
                <p> {firsname} </p>
                <p>{lastname}</p>
                <p>{email}</p>
                
            </div>


        </StyledWrapper>





    )

}

export default User;