import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDieuMv-Bc207FQtTFuSyEtjWSeq0bbOfk',
  authDomain: 'reactzzaria-8fc2f.firebaseapp.com',
  databaseURL: 'https://reactzzaria-8fc2f.firebaseio.com',
  projectId: 'reactzzaria-8fc2f',
  storageBucket: '',
  messagingSenderId: '647218097771',
  appId: '1:647218097771:web:453eeda7eac58336'
}

firebase.initializeApp(config)

export default firebase
