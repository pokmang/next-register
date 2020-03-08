import styled from "styled-components";
import { connect } from "react-redux";

const StyledWrapper = styled.div`


    ${props => props.islogin && `
      border:1px solid rgba(255,0,0,1);
    `}     
    .user{
        border:1px solid rgba(0,0,0,1);
        border-radius: 8px ;
        width: 200px ;
        padding : 10px ;
        margin : 15px;
    }
    
   

`

const Users = (props) => {

    const { users } = props;
    console.log("UUUUU", users)

    return (
        <StyledWrapper islogin={props.islogin}>
            {
                users.map((user, index) => {
console.log(index + ": ",user);

                    return (

                        <div className='user'>
                            <img src={user.imageUrl} width='50%' height='50%' />
                            <p> {user.firstname} </p>
                            <p>{user.lastname}</p>
                            <p>{user.email}</p>

                        </div>
                    )
                }
                )

            }



        </StyledWrapper>





    )

}

export default connect(state => state.User)(Users);