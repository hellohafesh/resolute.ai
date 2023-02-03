// import { createContext, useState } from "react";
// // import { getAuth } from "firebase/firebase-auth";



// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {


//     const createUser = (email, password) => {

//         // return createUserWithEmailAndPassword(auth, email, password)
//     }



//     // console.log(app)


//     const authInfo = {
//         createUser,

//     }


//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
import React, { createContext } from 'react';
// import app from '../firebase/firebase.config';
// import { gethAuth } from 'firebase/auth';


export const AuthContext = createContext();
// const auth = gethAuth(app)

const AuthProvider = ({ children }) => {

    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;