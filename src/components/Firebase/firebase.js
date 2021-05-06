import app from "firebase/app"
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey : process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_Storage_Bucket
}

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.db = app.database();
        this.auth = app.auth();

        this.googleAuthProvider = new app.auth.GoogleAuthProvider();
    }

    doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

    doSignOut = () => this.auth.signOut();

    user = (uid) => this.db.ref(`/users/${uid}`);

    carts = (cart) => this.db.ref(`/carts/${cart.cartid}`);

    onAuthChangeListener = (next, fallback = () => {}) => {
        return this.auth.onAuthStateChanged(authUser => {
            if(authUser) {
                this.user(authUser.uid)
                .once('value')
                .then(snapshot => {
                    const dbUser = snapshot.val();
                    const user = {
                        uid: authUser.uid,
                        email: authUser.email,
                        emailVerified: authUser.emailVerified,
                        ...dbUser
                    };
                    console.log(`authlistener :: listener :: ${user}`);
                    this.db.ref(`/carts/${user.uid}`)
                    .once('value')
                    .then((snapshot) => {
                    
                       const currentCart = snapshot.val();
                       next(user, currentCart);
                    }).catch((error) => {
                        console.log("ERROR:: IN FETCHING CART", error);
                    })
                   
                })
                
            } else {
                console.log("User has logout")
                fallback();
            }
        });
    };

    storeCart = (cart) => {
        console.log(cart)
        try{
        this.carts(cart).set({
            cart
        })
       } catch (error) {
           console.log("ERROR :: IN STORING CART ::", error);
       }
    }

}

export default Firebase;