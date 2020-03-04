const userinfo = [
    {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlZdpbK9Vj39UQbfibrytDSsEKyleVDDF3AG2vELVt7lcSImgo',
    firsname: 'mang',
    lastname: 'sulong',
    email: 'usman@gmail.com'
    },
 ]


const initialState = {
    users: userinfo
}

export const UserReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'CREATE_USER' :
            console.log(action);
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        default: return state;
    }

}