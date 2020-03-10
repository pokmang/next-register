import styled from "styled-components";
import { connect } from "react-redux";

const StyledWrapper = styled.div`
    max-width: 180px;
    boder0radius: 8px;
    box-shadow : 0 0 6px 0 rgab(0,0,0,.15);
    overflow: hidden;
    marjin-bottom: 10 px;
    ${props => props.selected && `
    box-shadow : 0 0 6px 0 rgab(0,0,255,.50); 
    `}
    .action-button{
        text-align: center;
        color: blue;
        cursor: pointer;
        padding: 8px;
        &:hover{
            bacground-color: rgba(0,0,0,.15)
        }
    }
    .action-button-container{
        display:flex;

    }
    .img{
        height: 70px;
        width: 81px;
    }
    .content {
        padding: 10px 10px 0 10px;
        h4, p{
            margin: 0;
        }
    }


`

const Users = props => {
    
    console.log("props",props);
    
    
    const { selected ,handleClick, handleUpdate, handleDelete } = props;
    const { imageUrl,firstname,lastname,email } = props.user;
    return (
        <StyledWrapper onClick ={handleClick} selected= {selected}>
            <img src={imageUrl}  />
            <div className='content'>
                <p>{firstname}</p>
                <p>{lastname}</p>
                <p>{email}</p>
            </div>
            {
                (handleDelete && handleUpdate) && (
                    <div className = "action-button-container">
                        <div className = "action-button">Update</div>
                        <div className = "action-button">Delete</div>
                    </div>
                )
            }
        </StyledWrapper>





    )

}

export default (Users);