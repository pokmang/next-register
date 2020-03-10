const userinfo = [
    {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo',
    firstname: 'root',
    lastname: 'root',
    email: 'root@gmail.com'
    }
 ]


const initialState = {
    users: userinfo,
    checkUser: null,
    statusPageLogin : true ,


}

export const UserReducer = (state = initialState, action) =>{
    console.log(action);
    
    switch(action.type){
    
        case 'CREATE_USER' :
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case 'LOGIN' :
            return{
                ...state,
                checkUser:action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                checkUser: null
            }
        case 'CHANGE_PAGE_LOGIN':
            return{
                ...state,
                statusPageLogin: action.payload
            }
        case 'UPDATE_USER': 
           return {
               ...state,
               users: state.users.map((user, index)=>{
                   if(index === action.index){
                       return action.data
                   }
                   return user
               })
           }
        case 'DELETE_USER': 
           return{
               ...state,
               users: state.users.filter((user,index)=> index !== action.index)
           }
        
        default: return state;
    }

}