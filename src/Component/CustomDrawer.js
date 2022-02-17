import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Helper/DeviceDimensions';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../Helper/Colors';


const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate('Profile')}>
          <View
            style={{
              marginTop: SCREEN_HEIGHT * 0.02,
              marginHorizontal: SCREEN_WIDTH * 0.03,
              backgroundColor: '#12edb3',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <Image
              source={require('../Assets/Images/Side_nav/man.png')}
              style={{marginVertical: 5, left: 5, height: 65, width: 65}}
            />
            <View style={{marginHorizontal: 15, justifyContent: 'center'}}>
              <Text style={styles.title}>Shan Reyan</Text>
              <Text style={styles.Caption}>Shan@gmail.com</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <EntypoIcon
                name="chevron-thin-right"
                style={{left: 30}}
                color={'#fff'}
                size={22}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Drawer.Section title="General" style={styles.drawersection}>
          <DrawerItemList {...props} />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    marginTop: 3,
    color: '#fff',
    fontSize: 18,
  },
  Caption: {
    lineHeight: 14,
    color: '#fff',
    fontSize: 12,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  Paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawersection: {
    marginTop: SCREEN_HEIGHT * 0.01,
    borderTopWidth: 1,
    borderTopColor: Colors.Cell_Phone_Heavy_Dark,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    height: SCREEN_HEIGHT * 0.07,
  },
  prefrance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
