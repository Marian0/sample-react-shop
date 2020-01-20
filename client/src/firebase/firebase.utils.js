import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Read config from .env file
const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_OBJECT);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

/**
 * Open the auth popup
 */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/**
 * Persist user Auth to Firestore
 * @param {*} userAuth 
 * @param {*} additionalData 
 */
export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

/**
 * This helper will add collections (objectsToAdd) to firestore at (collectionKey)
 * @param {*} collectionKey 
 * @param {*} objectsToAdd 
 */
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


export const convertCollectionSnapshotToMap = (collections) => {

  const transforCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  });

  return transforCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
};

export default firebase;