import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons,FontAwesome } from "react-native-vector-icons";

const CompeteScreen = () => {
  const competitions = [
    {
      id: 1,
      title: 'Rap Battle Royale',
      description: 'Showcase your lyrical prowess in this epic rap battle competition!',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Guitar Solo Showdown',
      description: 'Strum your way to victory in this thrilling guitar solo competition!',
      imageUrl: 'https://img.freepik.com/free-photo/man-plays-acoustic-guitar-closeup_169016-20618.jpg?t=st=1713945075~exp=1713948675~hmac=70892efdab9450775c46158840706e91a23d05a4177f838b36279ca8d566df96&w=360',
    },
    // Add more competitions as needed
  ];

  return (
    <ScrollView style={styles.container}>
      
      {competitions.map(competition => (
        <TouchableOpacity key={competition.id} style={styles.competitionContainer}>
          <Image source={{ uri: competition.imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{competition.title}</Text>
            <Text style={styles.description}>{competition.description}</Text>
            <TouchableOpacity style={styles.enterButton}>
              <Text style={styles.enterButtonText}>Enter Competition</Text>
              <FontAwesome name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
  competitionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  enterButton: {
    flexDirection: 'row',
    backgroundColor: '#4169E1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default CompeteScreen;
