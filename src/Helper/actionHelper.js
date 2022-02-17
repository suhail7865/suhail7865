import AsyncStorage from '@react-native-async-storage/async-storage';
//const GetUserCityData = async () => {
// export const GetUserCityData = async () => {
//   var cityData = await AsyncStorage.getItem('userCity');
//   var cityDataJson = JSON.parse(cityData);
//   //console.log(cityDataJson.cityId);
//   return cityDataJson;
// };

export const GetUserCityData = async () => {
    var cityData = await AsyncStorage.getItem('userCity');
    var cityDataJson = JSON.parse(cityData);
    return cityDataJson
}

export const GetUserLoginData = async () => {
    var userLoginData = await AsyncStorage.getItem('user');
    var userLoginJson = JSON.parse(userLoginData);
    console.log(userLoginJson, '------------userLoginJson')
    console.log(userLoginData, '------------userLoginData')
    return userLoginJson
} 

