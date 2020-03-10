export const UserAction = {
    createUser: (data) =>{
        return { type: 'CREATE_USER' , payload: data}
    },
    updateUser: (index,data) =>{
        return { type: 'UPDATE_USER' , index, data}
    },
    deleteUser: (data) =>{
        return { type: 'DELETE_USER' , index}
    }



}