import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
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
import { Theme } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default function HomeScreen ({ navigation }: any) {

  const people: any = [
    {
      avatar: 'https://images.unsplash.com/photo-1601944294379-2947903604da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80',
      name: 'Jennefer',
      message: 'lorem ipsum dolor sit amet',
      date: '10:41 am',
      status: 'online',
    },
    {
      avatar: 'https://media.istockphoto.com/id/500837102/photo/close-up-portrait-of-young-beautiful-blonde-woman-on-gray.jpg?s=612x612&w=0&k=20&c=6WZ4GaLr1NwCF_VSYIOtV6WrIvitjFhsMhLP9laLyLQ=',
      name: 'Mariana',
      message: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
      date: '8:50 am',
      status: 'online',
    },
    {
      avatar: 'https://media.istockphoto.com/id/1322686195/photo/beautiful-looking-young-blonde-woman-with-the-middle-length-hair-wearing-in-a-delicate-makeup.jpg?s=170667a&w=0&k=20&c=g_RjmNinxLMdxPY5INiv1Xa7qa1Q3fGJSBfcvj4DG9M=',
      name: 'Gabriella',
      message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      date: '7:27 am',
      status: 'offline',
    },
    {
      avatar: 'https://i.pinimg.com/736x/e5/cd/3f/e5cd3fb613091b03d8ed47b793ba530e.jpg',
      name: 'Amanda',
      message: 'lorem ipsum',
      date: '7:16 am',
      status: 'online',
    },
    {
      avatar: 'https://lovehairstyles.com/wp-content/uploads/2021/09/short-blonde-hair-styles-wavy-powder-blonde-683x1024.jpg',
      name: 'Alicie',
      message: 'lorem ipsum dolor sit',
      date: '1d',
      status: 'offline',
    },
    {
      avatar: 'https://www.prettydesigns.com/wp-content/uploads/2015/12/short-angled-blonde-bob-hairstyle-for-thin-hair.jpg',
      name: 'Letícia',
      message: 'lorem ipsum dolor sit',
      date: '1d',
      status: 'offline',
    },
    {
      avatar: 'https://shorthairstyless.com/wp-content/uploads/2020/08/Bob-Hairstyle-for-Thin-Hair.jpg',
      name: 'Beatriz',
      message: 'lorem ipsum dolor sit',
      date: '1d',
      status: 'offline',
    },
    {
      avatar: 'https://i.pinimg.com/originals/38/0d/04/380d04649bf17209a6eed1e737d5790b.jpg',
      name: 'Fernanda',
      message: 'lorem ipsum dolor sit',
      date: '1d',
      status: 'offline',
    },
    {
      avatar: 'https://i0.wp.com/thebestacrylicnails.com/wp-content/uploads/2022/03/275277473_691828201835446_6233617312070638479_n.jpg?fit=650%2C726&ssl=1',
      name: 'Vanessa',
      message: 'lorem ipsum dolor sit',
      date: '1d',
      status: 'offline',
    },
    {
      avatar: 'https://www.short-haircut.com/wp-content/uploads/2014/12/New-Short-Blonde-Hairstyles_20.jpg',
      name: 'Luisa',
      message: 'lorem ipsum dolor sit',
      date: '1d',
      status: 'offline',
    },
  ];

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
                {people.map((item: any, index: number) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.item} 
                    onPress={() => {
                      Keyboard.dismiss();
                      // navigation.navigate('Profile', { id: item.id });
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
