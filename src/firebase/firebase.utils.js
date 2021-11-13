import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDycDExgI_YueQjbCozckGp3YPn44E8guk',
  authDomain: 'crown-clothing-acf69.firebaseapp.com',
  projectId: 'crown-clothing-acf69',
  storageBucket: 'crown-clothing-acf69.appspot.com',
  messagingSenderId: '697990370401',
  appId: '1:697990370401:web:75438da317655762ae0620',
  measurementId: 'G-47CQS1NH6C',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
  const { displayName, email } = userAuth
  const createdAt = new Date()
    try {
        await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData,
        })
       } catch (error) {
         console.log('error creating user', error.message)
       }
	 }
	return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
