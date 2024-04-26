import React from "react";
import CustomListview from "../components/ArtistList/CustomListView";
import { StyleSheet, View } from "react-native";

const ArtistsScreen = () => {
  /* Function to populate the list */
  const getData = () => {
    return [
      {
        key: 1,
        title: "George Bonga",
        job: "Producer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        image_url:  require('./img/3.jpg'),
         
      },
      {
        key: 2,
        title: "Mercy Atieno",
        job: "Artist",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          image_url:  require('./img/7.jpg'),
        },
      {
        key: 3,
        title: "Ken Reagan",
        job: "Producer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          image_url:  require('./img/11.jpg'),
           },
      {
        key: 4,
        title: "Rego",
        job: "Engineer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          image_url:  require('./img/6.jpg'),
        },
    ];
  };

  return (
    <View style={styles.container}>
      <CustomListview itemList={getData()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
});

export default ArtistsScreen;
