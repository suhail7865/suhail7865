import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
 TouchableHighlight,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {SCREEN_HEIGHT} from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/Entypo';
import {getCategoryData} from '../../Helper/API_Call/API_Call';
import {Colors} from '../../Helper/Colors';
import {GetUserCityData} from '../../Helper/actionHelper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AllServices = ({navigation}) => {
  const colorCategory = [
    '#4485FD',
    '#a584ff',
    '#ff8f71',
    '#00c11a',
    '#a584ff',
    '#ff8f71',
    '#4485FD',
    '#00c11a',
    '#a584ff',
    '#ff8f71',
    '#00c11a',
    '#a584ff',
    '#ff8f71',
    '#4485FD',
  ];
  const [categoryKeyService, categoryValueService] = useState([]);
  const [isServiceFetching, setServiceisFetching] = useState(true);
  const [selectedCityKey, selectedCityData] = useState([]);

  useEffect(() => {
    GetUserCityData();
    getAllCategoryServices();
    setTimeout(() => {
      setServiceisFetching(false);
    }, 200);
  }, []);

  const getAllCategoryServices = () => {
    getCategoryData('allcategory', 'indore')
      .then(async res => {
        let response = res;
        categoryValueService(response.data.categories);
        // console.log(categoryKeyService, '----------keyCateSer')
      })
      .catch(err => {
        let error = err;
        console.log(error);
      });
  };

  GetUserCityData().then(async res => {
    selectedCityData(res);
    // console.log(res, 'cityssssssssssss')
  });
  return (
    <View style={styles.container}>
      <View style={styles.topHead}>
        <Text style={styles.text}>All Services</Text>
        <Text
          style={{
            fontFamily: 'Poppins-ExtraBold',
            fontSize: 15,
            color: Colors.Mostly_Black,
          }}>
          {selectedCityKey.cityName},
          <Text
            style={{fontFamily: 'Poppins-Regular', color: Colors.Mostly_Black}}>
            {' '}
            India
          </Text>
        </Text>
      </View>
      <View style={{marginBottom: SCREEN_HEIGHT * 0.15}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoryKeyService}
          keyExtractor={(item, index) => item.category_id}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={styles.card}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 10,
                    }}
                    onPress={() =>
                      navigation.navigate('Vandors', {id: item.category_id})
                    }>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={[
                          styles.btnSquere,
                          {backgroundColor: colorCategory[index]},
                        ]}>
                        <Image
                          source={{uri: item.category_icon}}
                          style={{
                            flex: 0.5,
                            width: '40%',
                            resizeMode: 'stretch',
                          }}
                        />
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: 16,
                            color: Colors.Mostly_Black,
                          }}>
                          {item.category_name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            fontSize: 13,
                            color: Colors.Mostly_Black,
                          }}>
                          {selectedCityKey.cityName} | {item.count}+
                        </Text>
                      </View>
                    </View>
                    <Icon
                      name="chevron-thin-right"
                      style={{alignSelf: 'center'}}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginHorizontal: 16,
                    borderBottomColor: '#f5f5f5',
                    borderBottomWidth: 0.7,
                  }}
                />
              </>
            );
          }}
        />
      </View>
    </View>
  );
};
export default AllServices;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fcff',
  },
  topHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    color: Colors.Mostly_Black,
  },
  card: {
    backgroundColor: '#ffffff',
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
  },
  btnSquere: {
    height: 50,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 5,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});
