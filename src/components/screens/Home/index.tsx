import * as React from 'react';
import { 
  Dimensions, 
  Keyboard, 
  Pressable, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import { Mocks, Theme } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function HomeScreen ({ navigation }: any) {

  const contact = Mocks.Users;
  
  return (
    <View style={styles.main}>
      <Pressable 
        style={[styles.main, {
          width: windowWidth,
          height: windowHeight
        }]} 
        onPress={Keyboard.dismiss}
      >
        <ScrollView 
          style={styles.main}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>People</Text>
                <Text style={styles.contactsQuantity}>(42)</Text>
              </View>
            </View>
            {/* Search */}
            <View style={styles.searchContainer}>
              <View style={styles.search}>
                <Ionicons style={styles.searchIcon} name="ios-search-outline" />
                <TextInput 
                  style={styles.searchField} 
                  placeholder="Search people"
                  placeholderTextColor={Theme.Colors.Gunmetal1}
                />
              </View>
              <View style={styles.menu}>
                <TouchableOpacity 
                  style={styles.addContactButton} 
                  onPress={async () => ''} 
                  activeOpacity={0.6}
                >
                  <Ionicons style={styles.addContactIcon} name="ios-add" />
                </TouchableOpacity>
              </View>
            </View>
            {/* Body */}
            <View style={styles.body}>
              <View style={styles.listContainer}>
                {contact.map((item: any, index: number) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.item} 
                    onPress={() => {
                      Keyboard.dismiss();
                      navigation.navigate('Profile', { id: item.id });
                    }}
                    activeOpacity={0.6}
                  >
                    <View style={styles.contactAvatarContainer}>
                      <Image style={styles.contactAvatar} source={{uri: item.avatar}} />
                      {item.status === 'online' ? 
                        <View style={[styles.itemStatusIcon, styles.itemOnlineIcon]} /> : 
                        <View style={[styles.itemStatusIcon, styles.itemOfflineIcon]} />
                      }
                    </View>
                    <View style={styles.itemContent}>
                      <View style={[styles.itemColumn, styles.columnStart]}>
                        <Text style={styles.contactName}>{item.name}</Text>
                        <Text style={styles.contactMessage} numberOfLines={1}>{item.message}</Text>
                      </View>
                      <View style={[styles.itemColumn, styles.columnEnd]}>
                        <Text style={styles.contactDate}>{item.date}</Text>
                        <View style={styles.itemNoticationIcon} />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </Pressable>
    </View>
  );
}
