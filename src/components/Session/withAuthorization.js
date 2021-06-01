import React, {useContext, useEffect} from "react";
import {connect} from "react-redux";
import FirebaseContext from "../Firebase/context";
import {withRouter} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const withAuthorization = (Component) => {
    const NewComponent = (props) => {
        const firebase = useContext(FirebaseContext);

        
        const next = (authUser) => {
            if(!authUser){
                props.history.push(ROUTES.HOME_PAGE);
            }
        }

        const fallback = () => props.history.push(ROUTES.HOME_PAGE);

        useEffect(()=>{
            firebase.onAuthChangeListener(next, fallback);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        return props.authUser ? (<Component {...props} />) : (<p>Please login to see this route</p>)
    }
    const mapStateTOProps = (state) => ({
        authUser: state.sessionReducer.authUser,
    })
    return withRouter(connect(mapStateTOProps)(NewComponent));
} 

export default withAuthorization;