import styled from 'styled-components'
import Link from 'next/link';
import { connect } from 'react-redux';
import Router from "next/router";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60
    px;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 10px 8px 10px #888888;
    margin-top: 5px
    

    .logo   {
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
            margin-right: 10px;
            border-radius: 50%;
           
        }
    }
    .menu{
        display: flex;
        


    }
    .menu-item{
        cursor: pointer;
        margin-right: 10px;

    }


`

const Tapbar = (props) =>{

    const { checkUser } = props;
    console.log("Tapbar",checkUser)
    if(checkUser === null){
        return(
<></>        )
    }
    const logout = () =>{
        Router.push('/').then(()=>{
            props.dispatch({type: 'LOGOUT'})
        });
    }
    return(
        <StyledWrapper>
        
            
                <div className='logo'>
                    <img src='/static/images/photo.jpg'  width='40'  height= '50'/>
                    <h4>{checkUser ? `${checkUser.firstname} ${checkUser.lastname}` : ''}</h4>
                </div>
            
           
            <div className='menu'>
            <Link href='/Profile'>
                <div className='menu-item'>HOME</div>
            </Link>
            {
                checkUser.role === 1 && (
                    <Link href='/manage'>
                    <div className='menu-item'>Admin</div>
                </Link>
                )
            }
           
           
                <div className='menu-item' onClick={logout}>Logout</div>
       

            </div>




        </StyledWrapper>



    )
}
export default connect(state=> state.User)(Tapbar) ;