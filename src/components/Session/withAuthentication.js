import React, {useContext, useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUSer, fetchCartForCurrentUser} from "../../actions/actions";
import FirebaseContext from "../Firebase/context";

const withAuthentication = (Component) => {
    const NewComponent = (props) => {
        const firebase = useContext(FirebaseContext);

        const saveLocalStorage =  (authUser) => {
            localStorage.setItem('authUser', JSON.stringify(authUser));
        }

        const fallback = () => {
            localStorage.removeItem('authUser');
            props.setAuthUSer(null)
        }
        const next = (authUser, currentCart={}) => {
            saveLocalStorage(authUser);
            props.setAuthUSer(authUser);
            props.fetchCartForCurrentUser(authUser.uid, currentCart);

        }

        useEffect(()=>{
            const user = JSON.parse(localStorage.getItem('authUser'));
            props.setAuthUSer(user);
            // firebase.database().ref(`/carts/${user.userUid}`)
            // .once('value')
            // .then((snapshot) => {
                       
            // }).catch((error) => {
            //     console.log("ERROR:: IN FETCHING CART FOR CURRENT USER",error);
            // })
            firebase.onAuthChangeListener(next, fallback);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        return <Component {...props} />
    }

    return connect(null, { setAuthUSer, fetchCartForCurrentUser })(NewComponent);
} 

export default withAuthentication;