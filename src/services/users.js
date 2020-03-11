import firebase from '../firebase' ;

const usercol = firebase.firestore().collection('user') ;
    
export function addUser(data) {

    return  usercol.add(data)
    
}