import Tapbar from '../src/components/Tapbar';
import User from '../src/components/User';
import { connect } from 'react-redux';




const Mange =(props)=>{
    console.log(props);

    const {users} = props ;

  
    return( 
        <div>
            <Tapbar /> 
 
            <User  />
          
            
        </div>
    ) }
    
export default connect(state=>state.User)(Mange);