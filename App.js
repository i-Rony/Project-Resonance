import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
// import ProfileScreen from './screens/ProfileScreen';


const App = () => {
  return (
    // <ProfileScreen/>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
  )
}

  // Sign Up Method

  // registerUser = (email, pass) => {
  //   console.log(email, pass);
  //   auth.createUserWithEmailAndPassword(email, pass)
  //   .then((userObj) => console.log(email, pass, userObj))
  //   .catch((error) => console.log('error logging in', error));
  // }

  // this.registerUser('testmail@gmail.com', 'fakepassword');
  
  // Checks whether logged in or not

  // f.auth().onAuthStateChanged(function(user) {
  //   if(user){
  //     console.log('Logged In', user);
  //   } else {
  //     console.log('Logged Out');
  //   }
  // });

  // Sign Out Function

  // auth.signOut()
  // .then(() => {
  //   console.log('Logged Out...');
  // }).catch((error) => {
  //   console.log('Error: ', error);
  // });


  // Login with Facebook

  // async loginWithFacebook(){
  //   const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(
  //     'APP_ID',
  //     {
  //       permissions: [
  //         'email',
  //         'public_profile'
  //       ]
  //     }
  //   );

  //   if(type === 'success'){
  //     const credentials = f.auth.FacebookAuthProvider.credential(token);
  //     f.auth().signInWithCredential(credentials).catch((error) => {
  //       console.log('Error: ', error);
  //     })
  //   }
  // }



export default App;

