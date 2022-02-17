import React, { useState,useEffect } from 'react';
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import MainTabScreen from '../../TabNavigator/MiantabNavigator';
import {GetUserCityData} from '../../Helper/actionHelper';





const {width, height} = Dimensions.get('window');


const slides = [
  {
    id: '1',
    image: require('../../Assets/Images/Welcome_pgs/img2.png'),
    ImageBackground: require('../../Assets/Images/Welcome_pgs/01.png'),
  },
  {
    id: '2',
    image: require('../../Assets/Images/Welcome_pgs/img3.png'),
    ImageBackground: require('../../Assets/Images/Welcome_pgs/2.png'),
  },
  {
    id: '3',
    image: require('../../Assets/Images/Welcome_pgs/img4.png'),
    ImageBackground: require('../../Assets/Images/Welcome_pgs/03.png'),
  },
];


const Slide = ({item}) => {
  return (
    <View
      style={{width: width, marginTop: height / 16}}>
      <Image
        source={item?.image}
        style={{height: 240, resizeMode: 'contain', marginStart: -32}}
      />
      <ImageBackground
        source={item?.ImageBackground}
        style={{height: 105, width: 96, resizeMode: 'center', marginTop: 35,left:16}}
      />
      <Text style={styles.title}>Our Consultants</Text>
      <Text style={styles.subtitle}>
        Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. shini nimi mata shini mosta santra la masto lokyo nasta tarrif minjo nimamatan
      </Text>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {


  const [selectedCityKey, selectedCityData] = useState('');
  const [isFetching, setisFetching] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

    useEffect(() => {
      GetUserCityData().then(async res => {
        selectedCityData(res);
      });
      setTimeout(() => {
        setisFetching(false);
      }, 2000);
    },[]);

    const navigateUserInfo = () => {
      if(selectedCityKey==null){
        navigation.navigate('LocationScreen');
      }else if(selectedCityKey.cityId){
        navigation.navigate('MainTabScreen');
      }
    };
    
  console.log(selectedCityKey , ".......................city key");
  
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const Footer = () => {
    return (
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        {/* Render buttons */}
        <View style={{marginBottom: 16}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigateUserInfo()}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff',
                    paddingRight: 10,
                  }}>
                  Get Started
                </Text>
                <Icon name="arrow-right" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: '#f0fdf9',
                    paddingRight: 10,
                    fontFamily: 'Poppins-Regular'
                  }}>
                  Next
                </Text>
                <Icon name="arrow-right" size={14} color="#f0fdf9" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar  hidden={false}  />
      <View style={{flexDirection: 'column', width: width}}>
        <Image
          source={require('../../Assets/Images/Welcome_pgs/logo.png')}
          style={{resizeMode: 'contain', width: 90, margin: 16}}
        />
        <TouchableOpacity activeOpacity={0.8} style={styles.btnSkip} onPress={() => navigateUserInfo()} >
          <Text
            style={{color: '#03d9a0', fontFamily:'Poppins-Reguler'}}
            >
            Skip
          </Text>
          <Icon
            name="angle-double-right"
            size={15}
            color="#09dca4"
            style={{paddingLeft: 5}}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      {/* Indicator container */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          top: 0,
          flex: 1,
        }}>
        {/* Render indicator */}
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: '#09dca4',
                width: 20,
              },
            ]}
          />
        ))}
      </View>
      <View style={{bottom: 0, marginTop: 16}}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#000',
    fontSize: 11,
    marginLeft: 16,
    marginRight: SCREEN_WIDTH * 0.1,
    marginTop: SCREEN_HEIGHT * 0.01,
    lineHeight:18,
    fontFamily: 'Poppins-Regular',
  },
  title: {
    color: '#1b1b1b',
    fontSize: 26,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    marginTop: SCREEN_HEIGHT * -0.07,
    fontFamily: 'Poppins-SemiBold',
  },
  indicator: {
    height: 6,
    width: 10,
    backgroundColor: '#cdf8ed',
    marginHorizontal: 2,
    borderRadius: 5,
  },
  btn: {
    flex: 1,
    height: 47,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#09dca4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSkip: {
    flexDirection: 'row',
    margin: 16,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'flex-end',
    position: 'absolute',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#09dca4',
    backgroundColor: '#edfef9',
    right: 0,
  },
});
export default OnboardingScreen;
