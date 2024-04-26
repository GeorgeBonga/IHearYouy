import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const CallsScreen = () => {
  const calls = [
    {
      id: 1,
      callerName: 'John Doe',
      callType: 'Voice Call',
      callTime: '10:30 AM',
      callerAvatar: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      callerName: 'Jane Smith',
      callType: 'Video Call',
      callTime: '11:45 AM',
      callerAvatar: 'https://as2.ftcdn.net/v2/jpg/02/68/35/39/1000_F_268353902_6HIVcriLtHKAT52jWoZ9nkvFVqHi4nk1.jpg',
    },
    // Add more call entries as needed
  ];

  const renderCallItem = ({ item }) => (
    <TouchableOpacity style={styles.callItem}>
      <Image source={{ uri: item.callerAvatar }} style={styles.callerAvatar} />
      <View style={styles.callDetails}>
        <Text style={styles.callerName}>{item.callerName}</Text>
        <Text>{item.callType}</Text>
        <Text>{item.callTime}</Text>
      </View>
      <TouchableOpacity style={styles.callButton}>
        <Text style={styles.callButtonText}>Call</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={calls}
        renderItem={renderCallItem}
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
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  callerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  callDetails: {
    flex: 1,
  },
  callerName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  callButton: {
    backgroundColor: '#4169E1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CallsScreen;
