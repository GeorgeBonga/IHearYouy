
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchArtists = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Search/Discover Screen</Text> */}
      <TextInput placeholder="Search artists,producers by genre or location." style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {/* Display search results */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    top: 30
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#4169E1', // Royal Blue
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#C0C0C0', // Silver
    textAlign: 'center',
  },
});

export default SearchArtists;
