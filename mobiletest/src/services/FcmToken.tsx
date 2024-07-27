import messaging from '@react-native-firebase/messaging';

export const checkToken = async () => {
 const fcmToken = await messaging().getToken();
 if (fcmToken) {
    console.log(fcmToken);
 } 
}