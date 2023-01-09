import * as React from 'react';
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  Pressable, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { Mocks, Theme } from '../../../constants';
import { Ionicons }  from '@expo/vector-icons';

export default function ProfileScreen( { navigation, route }: any) {
  
  const contactId = route.params.id;

  const [ data, setData ] = React.useState({});
  const [ update, setUpdate] = React.useState(true);

  const contact = Mocks.Users;

  React.useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch('https://api.github.com/users/Daniel10091');
    //     const json = await res.json();

    //     setData(json);
    //     console.log(json);
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setUpdate(false);
    //   }
    // }
    // fetchData();
    // console.log(contactId);
    const fetchData = async () => {
      
      try {
        const res = await contact.filter((contact: any) => contact.id === contactId)
          .map((contact: any) => setData(contact));
        
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setUpdate(false);
      }
    }
    fetchData();

    // return () => {
    //   console.log(data);
    // }
  }, [update]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => navigation.goBack()} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.headerButtonIcon} name="ios-arrow-back-outline" />
          </TouchableOpacity>
          <View style={styles.contactInfo}>
            <View style={[styles.contactStatus, styles.contactOnlineStatus]} />
            <Text style={styles.contactUsername}></Text>
          </View>
          <TouchableOpacity 
            style={styles.headerButton} 
            // onPress={() => navigation.goBack()} 
            activeOpacity={0.6}
          >
            <Ionicons style={styles.headerButtonIcon} name="ios-settings-outline" />
          </TouchableOpacity>
        </View>
        {/* Body */}
        <View style={styles.body}>
          <Pressable 
            style={styles.chatContent} 
            onPress={Keyboard.dismiss}
          >

          </Pressable>
          <View style={styles.chatFooter}>
            <View style={styles.chatMenu}>
              <TouchableOpacity 
                style={styles.chatMenuButton} 
                // onPress={() => navigation.navigate('Chat')} 
                activeOpacity={0.6} 
              >
                <Ionicons style={styles.chatMenuButtonIcon} name="ios-happy-outline" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.chatMenuButton} 
                // onPress={() => navigation.navigate('Chat')} 
                activeOpacity={0.6} 
              >
                <Ionicons style={styles.chatMenuButtonIcon} name="ios-mic-outline" />
              </TouchableOpacity>
            </View>
            <View style={styles.chatFieldContainer}>
              <TextInput 
                style={styles.chatInputField} 
                placeholderTextColor={Theme.Colors.BlackCoral} 
                placeholder="Type your message" 
                // onChangeText={setMessage} 
              />
            </View>
            <TouchableOpacity 
              style={styles.chatSendButton} 
              // onPress={() => navigation.navigate('Send')} 
              activeOpacity={0.6} 
            >
              <Ionicons style={styles.chatSendButtonIcon} name="ios-send" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
