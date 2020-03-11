import styled from "styled-components";
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux'
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
    .bearcard-actions > div {
        flex: 1;
        padding: 4px;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
        transition: background-color .2s ease-in;
    }
    
    
   

`

const Users = (props) => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const { users ,checkUser } = props;

    if(checkUser === null){
        return(
            <div>login frist</div>
        )
    }
    const deleteUser =  (email) => {
        dispatch({ type: 'DELETE_USER', email    })
    }
    return (
        <StyledWrapper islogin={props.islogin}>
            {
                users.map((user, index) => {
                    if(user.email === checkUser.email) return  

                    return (

                        <div className='user'>
                            <img src={user.imageUrl} width='50%' height='50%' />
                            <p> {user.firstname} </p>
                            <p>{user.lastname}</p>
                            <p>{user.email}</p>
                            <hr color ="color=660066"/>
                            { checkUser.role === 1 &&(
                                     <div className='bearcard-actions'>
                                     <div onClick={()=>deleteUser(user.email)}>Delete</div>
                                 </div>
                            )}
                           

                        </div>
                    )
                }
                )

            }



        </StyledWrapper>





    )

}

export default connect(state => state.User)(Users);