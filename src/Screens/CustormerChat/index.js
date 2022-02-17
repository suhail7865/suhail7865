import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../Helper/DeviceDimensions';
import {Colors} from '../../Helper/Colors';
import {ChatHead} from '../../Component/ChatHead';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
  GiftedChat,
  Bubble,
  Send,
  Actions,
} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import AgoraUIKit from 'agora-rn-uikit';

export function CustomerChat({navigation}) {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const [secondUser, setSecondUser] = useState(route?.params?.secondUser);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: Colors.White,
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#f7f7f7',
          },
          right: {
            backgroundColor: Colors.LimeGreen,
          },
        }}
      />
    );
  };
  const chooseImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const customtInputToolbar = props => {
  //     return (
  //       <InputToolbar
  //         {...props}
  //         containerStyle={styles.inputView}

  //       />
  //     );
  //   };

  function renderActions(props) {
    return (
      <Actions
        {...props}
        options={{
          ['Attach File']: chooseImg,
        }}
        icon={() => (
          <View style={styles.circle}>
            <EntypoIcon name={'attachment'} size={20} color={'#000'} />
          </View>
        )}
        onSend={args => console.log(args)}
      />
    );
  }

  const renderSend = props => {
    return (
      <Send {...props} disabled={secondUser?.isBlocked}>
        <View style={styles.btnSend}>
          <Icon name="arrowup" color={Colors.White} />
        </View>
      </Send>
    );
  };
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '3e7de3496f7f4f8ca0b05d77c13afc16',
    channel: 'Solvekar',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      {/* <AgoraUIKit rtcProps={rtcProps} /> */}
      <ChatHead
        ImageComponent={
          <Image
            source={require('../../Assets/Images/DoctorMale/Male_Doctor_732x549-thumbnail-image.jpg')}
            style={{height: 40, width: 40, marginHorizontal:5}}
          />
        }
        BackTextName={'raja'}
        occupation={'doctor'}
      />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend={true}
        renderSend={renderSend}
        renderActions={renderActions}
        isTyping={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  btnSend: {
    bottom: 2,
    marginHorizontal: 5,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: Colors.LimeGreen,
  },

  circle: {
    backgroundColor: '#ebeff8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
  },
  customText: {
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.5,
  },
});
