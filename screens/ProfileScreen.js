import React from 'react';
import { View, Text,StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';

const ProfileScreen = () => {
  // Dummy JSON data
  const profile = {
    name: "John Doe",
    profilePicture:  require("./img/user1.jpg"),
    posts: 25,
    connected: 150,
    connections: 200,
    favored: 50,
    aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim a dui fermentum fermentum.",
    photoAlbum: [
      require('./img/1.jpg'),
       require('./img/5.jpg'),
       require('./img/7.jpg'),
    ],
    visuals: [
       require('./img/3.jpg'),
       require('./img/3.jpg'),
       require('./img/3.jpg'),
      
    ],
  };
  const Pentagon = () => {
    return (
      <View style={styles.pentagon}>
        <View style={styles.pentagonInner} />
        <View style={styles.pentagonBefore} />
      </View>
    );
  };
  
  StyleSheet.create({
    pentagon: {
      backgroundColor: "transparent",
    },
    pentagonInner: {
      width: 90,
      borderBottomColor: "red",
      borderBottomWidth: 0,
      borderLeftColor: "transparent",
      borderLeftWidth: 18,
      borderRightColor: "transparent",
      borderRightWidth: 18,
      borderTopColor: "red",
      borderTopWidth: 50,
    },
    pentagonBefore: {
      position: "absolute",
      height: 0,
      width: 0,
      top: -35,
      left: 0,
      borderStyle: "solid",
      borderBottomColor: "red",
      borderBottomWidth: 35,
      borderLeftColor: "transparent",
      borderLeftWidth: 45,
      borderRightColor: "transparent",
      borderRightWidth: 45,
      borderTopWidth: 0,
      borderTopColor: "transparent",
    },
  });

  return (
    <ScrollView style={{ flex: 1 }}>
    
      <View style={styles.container}>
      <View style={styles.pentagon}>
        <Image source={profile.profilePicture} style={styles.profilePicture} />
      </View>
      <TouchableOpacity style={styles.editButton}>
        <FontAwesome name="edit" color='silver' size={26} />
      </TouchableOpacity>
    </View>
 
   
    

      {/* Profile Stats */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
          <MaterialCommunityIcons name="book" color='blue' size={20} />
          <Text style={{ color: 'blue' }}>{profile.posts}</Text>
          <Text style={{ color: 'blue' }}>Posts</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
          <MaterialCommunityIcons name="account-network" color='blue' size={20} />
          <Text style={{ color: 'blue' }}>{profile.connected}</Text>
          <Text style={{ color: 'blue' }}>Connected</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
          <MaterialCommunityIcons name="handshake" color='blue' size={20} />
          <Text style={{ color: 'blue' }}>{profile.connections}</Text>
          <Text style={{ color: 'blue' }}>Connections</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <FontAwesome name="star" color='blue' size={20} />
          <Text style={{ color: 'blue' }}>{profile.favored}</Text>
          <Text style={{ color: 'blue' }}>Favored</Text>
        </View>
      </View>

      {/* About Me */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>About Me</Text>
        <Text>{profile.aboutMe}</Text>
      </View>

      {/* Photo Album */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Photo Album</Text>
        {/* Photo Album Grid */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {profile.photoAlbum.map((photo, index) => (
            <TouchableOpacity key={index} style={{ marginRight: 10 }}>
              <Image source={ photo } style={{ width: 100, height: 100, borderRadius: 10 }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Visuals */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Visuals</Text>
        {/* Slideshow */}
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
          {profile.visuals.map((visual, index) => (
            <TouchableOpacity key={index} style={{ marginRight: 10 }}>
              <Image source={ visual } style={{ width: 300, height: 200, borderRadius: 10 }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20
  },
  pentagon: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    transform: [{ rotate: '45deg' }],
    position: 'relative'
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
    transform: [{ rotate: '-45deg' }]
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: 50
  }
});

export default ProfileScreen;
