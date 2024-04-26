
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; 

const GeneralNotifications = () => {
  const notifications = [
    {
      id: 1,
      message: 'Someone followed you',
      icon: 'person-add',
    },
    {
      id: 2,
      message: 'Commented on your post',
      icon: 'chatbubbles',
    },
    {
      id: 3,
      message: 'Someone wants to connect',
      icon: 'hand-left-outline',
    },
    // Add more notifications as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notification}>
      <Ionicons name={item.icon} size={24} color="#4169E1" style={styles.icon} />
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>General Notifications</Text> */}
      
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'silver',
    borderRadius:5,
    marginBottom: 10,
    height:50,
  },
  icon: {
    marginRight: 10,
  },
  message: {
    fontSize: 16,
  },
});

export default GeneralNotifications;
