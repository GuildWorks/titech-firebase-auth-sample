import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // TODO: Insert firebase setting
  })
}

export default firebase
