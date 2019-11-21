import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // TODO: Insert firebase setting
    apiKey: "AIzaSyB22G2X41EHUnKA8WmslCOWMLybHyxsOn8",
    authDomain: "sample-47036.firebaseapp.com",
    databaseURL: "https://sample-47036.firebaseio.com",
    projectId: "sample-47036",
    storageBucket: "sample-47036.appspot.com",
    messagingSenderId: "1039393971545",
    appId: "1:1039393971545:web:1d5a2f89b490bf24254048"
  })
}

export default firebase
