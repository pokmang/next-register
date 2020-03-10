import styled from "styled-components";
import { connect } from "react-redux";
import User from "./User";

const StyledWrapper = styled.div`
    .grid-container{
        display: grid;
        grid-template-colums: repeat(8, lfr);
        grid-colum-gap: 10px;
    }
 

`

const Userlist = props =>{

    const { users , handleClick , selected }  = props ;
    return(
        <StyledWrapper>
            < div className = 'grid-container'>
                {
                    users.map((item,index) =>{
                       return(
                           <User 
                            key = {index}
                            user = {item}
                            selected={selected === index}
                            handleClick = { () => handleClick && handleClick(index)}
                        />
                       ) 
                        
                    })
                }
            </div>
        </StyledWrapper>
        
    )
}
export default connect(state=>state.User)(Userlist) ;