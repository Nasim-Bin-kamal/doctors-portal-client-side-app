import { useEffect, useState } from "react";
import initializeFirebase from "../pages/LoginPage/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


//initialize firbase app
initializeFirebase();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setErrorMsg('');

                //set user name
                const newUser = { email, displayName: name }
                setUser(newUser);

                //save user data
                saveUserData(email, name, 'POST');

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    //profile updated
                }).catch(error => {
                    setErrorMsg(error.message);
                });

                //for redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);

                setUser(result.user);
            }).catch(error => {
                setErrorMsg(error.message);
                // console.log(error.message);
            }).finally(() => {
                setIsLoading(false);
            });

    }

    const signInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                //logged in

                //for redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);

                // setUser(result.user);
                setErrorMsg('');
            }).catch(error => {
                setErrorMsg(error.message);
                // console.log(error.message);
            }).finally(() => {
                setIsLoading(false);
            });

    }

    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //signout successfull
        }).catch((error) => {
            //error happened
        }).finally(() => {
            setIsLoading(false);
        });
    }

    //observe user states
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then((idToken) => {
                        // console.log(idToken);
                        setToken(idToken);
                    });
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribe;

    }, [auth]);

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setErrorMsg('');
                //for redirect user
                const user = result.user;
                //save user date to database
                saveUserData(user?.email, user?.displayName, 'PUT')

                //redirect user
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //save user information in database
    const saveUserData = (email, displayName, method) => {
        const user = { email, displayName }; //if property name and value is same ,it can write in this way;
        fetch('https://hidden-cove-85165.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()

    }

    // check admin info
    useEffect(() => {
        fetch(`https://hidden-cove-85165.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email]);



    return {
        user,
        admin,
        token,
        setUser,
        isLoading,
        setIsLoading,
        setErrorMsg,
        errorMsg,
        signInWithGoogle,
        registerUser,
        signInUser,
        signOutUser
    }

}

export default useFirebase;