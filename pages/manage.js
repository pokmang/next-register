import Tapbar from '../src/components/Tapbar';
import User from '../src/components/User';
import { connect } from 'react-redux';
import Admin from '../src/components/Update';
import { useState } from 'react';
import { UserAction } from "../src/redux/user/action"
import Userlist from '../src/components/Userlist';



const Mange =(props)=>{
    const {users ,createUser , updateUser, deleteUser } = props ;
    const [selected , setselected ] = useState ();
    const [formDAta,setFormData] = useState({}) ;
    

  
    return( 
        <div>
            <Tapbar /> 
            <Admin
                handChange={(data) => setFormData(data)}
                handCreate ={(data) => createUser(data)}
                user = {users[selected]}    
            />
            <Userlist/>
            {/* <User 
                selected = {setselected}
                users ={users}
                handleClick = {(index)=> setselected(index)}
                handleUpdate={(index) => updateUser(index,formDAta)}
                handleDelete={(index)=> deleteUser(index)}
            /> */}
          
            
        </div>
    ) }
    
export default connect(state=>state.User, UserAction)(Mange);