const userinfo = [
    {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo',
    firstname: 'admin',
    lastname: 'admin',
    email: 'admin',
    password: 'admin',
    role : 1
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo',
        firstname: '1',
        lastname: '1',
        email: '1@gmail.com',
        password: '1',
        role : 0
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo',
            firstname: '2',
            lastname: '2',
            email: '2@gmail.com',
            password: '2',
            role : 0
            },
    
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
               users: state.users.map((user,index)=>{
                   if(user.email === action.payload.email){
                       return {...action.payload  , imageUrl : user.imageUrl , role : user.role}
                      
                   }
                   return user
               })
           }
        case 'DELETE_USER': 
        console.log(action   );
        
           return{
               ...state,
               users: state.users.filter((user,index)=> user.email !== action.email )
           }
        
        default: return state;
    }

}