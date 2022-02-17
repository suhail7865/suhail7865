import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import {LogBox} from 'react-native';

import {FontFamily} from '../../Helper/FontFamily';
import {Colors} from '../../Helper/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {GetOtpButton} from '../../Component/GetOtpButton';

const Brif = [
  {name: 'Brief Description', id: '1'},
  {name: 'Education', id: '2'},
  {name: 'Work & Experience', id: '3'},
];
export function ProfesstionDetails({navigation}) {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  const [modalVisible, setModalVisible] = useState(false);
  const [active, isActive] = useState(1);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert = 'Modal has been close';
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <Pressable
            style={{top: -10}}
            onPress={() => setModalVisible(!modalVisible)}>
            <Icon
              color={Colors.White}
              name="close"
              size={22}
              style={styles.closeButton}
            />
          </Pressable>
          <View style={styles.modalView}>
            <View style={{paddingHorizontal: 13}}>
              <Text style={styles.briefTextModal}>Brief Edit Description</Text>
              <Text style={styles.topBorderWidth}></Text>

              <View style={styles.descriptionViewModal}>
                <Text style={styles.firstDescripText}>
                  Gofinx doctor is responsible for all sides of care of a
                  patient. He diagnose, educate, and treat patients to ensure
                  that he have the best possible care. A few of the main duties
                  of a doctor are performing diagnostic tests, recommending
                  specialists for patients, document patient's medical history,
                  and educating patients.
                </Text>
                <View style={{}}>
                  <View style={{flexDirection: 'row'}}>
                    <Svg
                      marginTop={5}
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7">
                      <Circle
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="3.5"
                        cy="3.5"
                        r="3.5"
                        fill="#6f7c8e"
                      />
                    </Svg>
                    <Text style={styles.circleTextModal}>
                      Gofinx doctor is responsible for all sides of care of.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Svg
                      marginTop={5}
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7">
                      <Circle
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="3.5"
                        cy="3.5"
                        r="3.5"
                        fill="#6f7c8e"
                      />
                    </Svg>
                    <Text style={styles.circleTextModal}>
                      Gofinx doctor is responsible for all sides of care of a.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Svg
                      marginTop={5}
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7">
                      <Circle
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="3.5"
                        cy="3.5"
                        r="3.5"
                        fill="#6f7c8e"
                      />
                    </Svg>
                    <Text style={styles.circleTextModal}>
                      Gofinx doctor is responsible for all sides of a patient.
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Svg
                      marginTop={5}
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7">
                      <Circle
                        id="Ellipse_51"
                        data-name="Ellipse 51"
                        cx="3.5"
                        cy="3.5"
                        r="3.5"
                        fill="#6f7c8e"
                      />
                    </Svg>
                    <Text style={styles.circleTextModal}>
                      Gofinx doctor is responsible all sides of care of patient.
                    </Text>
                  </View>
                </View>
                <Text style={styles.firstDescripText}>
                  Gofinx doctor is responsible for all sides of care of a
                  patient. He diagnose, educate, and treat patients to ensure
                  that he have the best possible care. A few of the main duties
                  of a doctor are performing diagnostic tests, recommending
                  specialists for patients, document patient's medical history,
                  and educating patients.
                </Text>
              </View>
              <View>
                <GetOtpButton
                  button={{top: SCREEN_HEIGHT * 0.23}}
                  verifyOtp={'Update Changes'}
                  verifyButtonText={styles.updateButton}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.contentView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Brif}
          renderItem={({item}) => (
            <View
              style={{
                paddingHorizontal: 2,
                marginLeft: SCREEN_HEIGHT * 0.013,
                marginTop: SCREEN_HEIGHT * 0.03,
              }}>
              <TouchableOpacity

                activeOpacity={0.8}
                style={active == item.id ? styles.cardSelected : styles.card}
                onPress={() => isActive(item.id)}>
                <Text
                  style={
                    active == item.id
                      ? styles.activeTextFirst
                      : styles.inActiveTextFirst
                  }>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.brifViews}>
          <Text style={styles.briefText}>Brief Description</Text>

          <TouchableOpacity
            onPressOut={() => setModalVisible(true)}
            activeOpacity={0.8}
            style={styles.editView}>
            <Text style={styles.editText}>Edit</Text>
            <Material
              name="pencil"
              color={Colors.LimeGreen}
              style={{
                marginHorizontal: SCREEN_HEIGHT * 0.004,
                width: SCREEN_WIDTH * 0.03,
                height: SCREEN_HEIGHT * 0.016,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.docterDescriptionView}>
          <Text style={styles.firstDescripText}>
            Gofinx doctor is responsible for all sides of care of a patient. He
            diagnose, educate, and treat patients to ensure that he have the
            best possible care. A few of the main duties of a doctor are
            performing diagnostic tests, recommending specialists for patients,
            document patient's medical history, and educating patients.
          </Text>

          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 7 7">
            <Circle
              id="Ellipse_51"
              data-name="Ellipse 51"
              cx="3.5"
              cy="3.5"
              r="3.5"
              fill="#6f7c8e"
            />
          </Svg>
          <Text style={styles.circleText}>
            Gofinx doctor is responsible for all sides of care of a patient.
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 7 7">
            <Circle
              id="Ellipse_51"
              data-name="Ellipse 51"
              cx="3.5"
              cy="3.5"
              r="3.5"
              fill="#6f7c8e"
            />
          </Svg>
          <Text style={styles.circleText}>
            Gofinx doctor is responsible for all sides of care of a patient.
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 7 7">
            <Circle
              id="Ellipse_51"
              data-name="Ellipse 51"
              cx="3.5"
              cy="3.5"
              r="3.5"
              fill="#6f7c8e"
            />
          </Svg>
          <Text style={styles.circleText}>
            Gofinx doctor is responsible for all sides of care of a patient.
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 7 7">
            <Circle
              id="Ellipse_51"
              data-name="Ellipse 51"
              cx="3.5"
              cy="3.5"
              r="3.5"
              fill="#6f7c8e"
            />
          </Svg>
          <Text style={styles.circleText}>
            Gofinx doctor is responsible for all sides of care of a patient.
          </Text>
          <Text style={styles.firstDescripText}>
            Gofinx doctor is responsible for all sides of care of a patient. He
            diagnose, educate, and treat patients to ensure that he have the
            best possible care. A few of the main duties of a doctor are
            performing diagnostic tests, recommending specialists for patients,
            document patient's medical history, and educating patients.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Mostly_White_Cyan,
    height: SCREEN_HEIGHT * 0.686,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    width: '100%',
    height: 746,
    backgroundColor: Colors.White,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 20,
  },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
    padding: 10,
  },
  descriptionViewModal: {
    borderWidth: 1,
    borderColor: Colors.Light_Grayish_Blue_White,
    borderRadius: 6,
    paddingHorizontal: SCREEN_HEIGHT * 0.016,
    backgroundColor: Colors.White,
    minHeight: SCREEN_HEIGHT * 0.48,
    width: SCREEN_WIDTH * 0.928,
    backgroundColor: Colors.Very_Pale_Mostly_White_Blue,
  },
  circleTextModal: {
    width: SCREEN_WIDTH * 0.84,
    marginHorizontal: 5,
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },

  contentView: {
    backgroundColor: Colors.FloralWhite,
  },
  cardSelected: {
    borderWidth: 1,
    borderColor: Colors.LimeGreen,
    borderRadius: 100,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: Colors.LimeGreen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: SCREEN_HEIGHT * 0.02,
    paddingRight: SCREEN_HEIGHT * 0.02,
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.Light_Grayish_Blue,
    borderRadius: 100,
    height: SCREEN_HEIGHT * 0.05,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: SCREEN_HEIGHT * 0.02,
    paddingRight: SCREEN_HEIGHT * 0.02,
  },
  activeTextFirst: {
    fontSize: 11,
    fontFamily: FontFamily.regular,
    color: Colors.White,
  },
  inActiveTextFirst: {
    fontSize: 11,
    fontFamily: FontFamily.medium,
    color: Colors.Week_Black,
  },
  brifViews: {
    paddingHorizontal: SCREEN_HEIGHT * 0.016,
    marginVertical: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editView: {
    borderRadius: 4,
    borderWidth: 0.7,
    borderColor: Colors.LimeGreen,
    width: 63,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  editText: {
    color: Colors.LimeGreen,
    fontSize: 12,
    fontFamily: FontFamily.regular,
  },
  briefText: {
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
  },
  briefTextModal: {
    marginTop: SCREEN_HEIGHT * 0.02,
    color: Colors.Week_Black,
    fontSize: 14,
    fontFamily: FontFamily.semibold,
  },
  topBorderWidth: {
    bottom: SCREEN_HEIGHT * 0.019,
    width: SCREEN_WIDTH * 0.92,
    borderBottomWidth: 0.5,
    borderColor: Colors.Very_Dark,
  },
  docterDescriptionView: {
    paddingHorizontal: SCREEN_HEIGHT * 0.016,
    backgroundColor: Colors.White,
    height: SCREEN_HEIGHT * 0.52,
    width: SCREEN_WIDTH * 0.98,
  },
  firstDescripText: {
    marginVertical: 10,
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.regular,
    lineHeight: 18,
  },
  updateButton: {
    alignSelf: 'center',
    marginTop: SCREEN_WIDTH * 0.04,
    color: Colors.White,
    fontFamily: FontFamily.medium,
    fontSize: 13,
  },
  circleText: {
    width: 335,
    marginHorizontal: 10,
    color: Colors.Week_Black,
    fontSize: 11,
    fontFamily: FontFamily.medium,
  },
});
