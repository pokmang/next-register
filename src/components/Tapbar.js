import styled from 'styled-components'
import Link from 'next/link';

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

const Tapbar = () =>{
    return(
        <StyledWrapper>
            <Link href='/'>
                <div className='logo'>
                    <img src='/static/images/photo.jpg'  width='40'  height= '50'/>
                    <h4>PK</h4>
                </div>
            
            </Link>
            <div className='menu'>
            <Link href='/Profile'>
                <div className='menu-item'>HOME</div>
            </Link>
            <Link href='/manage'>
                <div className='menu-item'>Admin</div>
            </Link>
            <Link href='./'>
                <div className='menu-item'>Logout</div>
            </Link>

            </div>




        </StyledWrapper>



    )
}
export default Tapbar ;