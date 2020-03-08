import Tapbar from '../src/components/Tapbar';
import User from '../src/components/User';
import { connect } from 'react-redux';
import Admin from '../src/components/Update';




const Mange =(props)=>{


  
    return( 
        <div>
            <Tapbar /> 
            <Admin />
            <User  />
          
            
        </div>
    ) }
    
export default connect(state=>state.User)(Mange);