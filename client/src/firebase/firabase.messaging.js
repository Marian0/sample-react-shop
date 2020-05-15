import "firebase/messaging";
import firebase from './firebase.utils';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_OBJECT);

const messaging = firebase.messaging();
// Project Settings => Cloud Messaging => Web Push certificates
messaging.usePublicVapidKey(firebaseConfig.webPushCertificate);
export { messaging };