import React, {useContext, useEffect} from "react";
import {connect} from "react-redux";
import {setAuthUSer} from "../../actions/actions";
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
        const next = (authUser) => {
            saveLocalStorage(authUser);
            props.setAuthUSer(authUser);
        }

        useEffect(()=>{
            const user = JSON.parse(localStorage.getItem('authUser'));
            props.setAuthUSer(user);
            firebase.onAuthChangeListener(next, fallback);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        return <Component {...props} />
    }

    return connect(null, { setAuthUSer })(NewComponent);
} 

export default withAuthentication;