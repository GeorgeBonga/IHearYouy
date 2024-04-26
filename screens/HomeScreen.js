

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import moment from "moment";
import colors from "../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";


import Button from "../components/Button";
const { width, height } = Dimensions.get("window");


const HomeScreen = () => {
  const [time, setTime] = useState(moment().format("hh:mm A MMM Do"));
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [profiles, setProfiles] = useState([
    {
      source: require('./img/user3.jpg'),
      image :  require('./img/2.jpg'),
      name: 'George Bonga',
      online: true,
  },
  {
      source: require('./img/user1.jpg'),
      image :  require('./img/5.jpg'),
      name: 'Cookie Singer',
      online: true,
  },
  {
      source: require('./img/user2.jpg'),
      image :  require('./img/3.jpg'),
      name: 'Elmo Producer',
      online: false,
  },
    {
      source: require("./img/user3.jpg"),
      image: require("./img/5.jpg"),
      name: "David RockStar",
      online: true
    },
    {
      source: require("./img/user4.jpg"),
      image: require("./img/6.jpg"),
      name: "John Doe",
      online: true
    }
    ,
    {
      source: require("./img/user5.jpg"),
      image: require("./img/7.jpg"),
      name: "John Doe",
      online: true
    },
    {
      source: require("./img/user4.jpg"),
      image: require("./img/8.jpg"),
      name: "John Doe",
      online: true
    },
    {
      source: require("./img/user2.jpg"),
      image: require("./img/9.jpg"),
      name: "John Doe",
      online: true
    }
  ]);


 
  const buttonOnPress = (name) => {
    switch (name) {
      case "Like":
        setLikes(likes + 1);
        break;
      case "Dislike":
        setLikes(likes - 1);
        break;
      case "Comment":
        setComments(comments + 1);
        break;
      default:
        return;
    }
  };

 
  const renderLikesAndComments = () => {
    if (likes === 0 && comments === 0) {
      return;
    }

    return (
      <View style={styles.likesComments}>
        <Text style={styles.likeText}>
          {likes > 0 ? (
            <MaterialCommunityIcons name="thumb-up" color={colors.blue} />
          ) : (
            ""
          )}
          {likes === 0 ? "" : ` ${likes}`}
        </Text>
        <Text style={styles.likeText}>
        {comments > 0 ? (
            <MaterialCommunityIcons name="comments" color={colors.red} />
          ) : (
            ""
          )}
          {comments === 0 ? "" : `${comments} Comments`}
        </Text>
      </View>
    );
  };

  const renderLikeBar = () => {
    const buttons = ["Like","Dislike", "Comment", "Share"];
    const icons = ["thumb-up","thumb-down", "comment-multiple", "share"];

    return buttons.map((button, i) => (
      <Button
        key={i}
        name={button}
        onPress={() => buttonOnPress(button)}
        icon={icons[i]}
      />
    ));
  };


 

  const renderContent = ({ item }) => {
    return (
      <View>
         <View style={styles.avatarContainer}>
        <Image style={styles.profile} source={item.source} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>
            {time} <Ionicons name="globe" />
          </Text>
        </View>
      </View>
        <View style={styles.content}>
        <Image style={styles.image} source={item.image} />
        <Text>
       
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum condimentum elit, vel suscipit purus lobortis in. Maecenas lorem quam, gravida in hendrerit pharetra, malesuada in elit.
        </Text>
      </View>

      </View>
      
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
           
            {renderContent({ item })}
            {renderLikesAndComments()}
            <View style={styles.line} />
            <View style={styles.buttonContainer}>{renderLikeBar()}</View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 10,
  },

  content: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
  image: { height: height / 2.5, width: "100%" },

  line: {
    margin: 16,
    marginBottom: 0,
    borderColor: "#ddd",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  avatarContainer: {
    padding: 16,
    paddingBottom: 0,
    flexDirection: "row",
    marginBottom: 10,
  },

  nameContainer: {
    marginLeft: 10,
    justifyContent: "space-around",
  },

  name: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
  },

  time: {
    color: "gray",
    fontSize: 12,
  },

  profile: {
    backgroundColor: "black",
    height: 40,
    width: 40,
  },

  buttonContainer: {
    flexDirection: "row",
    height: 36,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  text: {
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 8,
    color: colors.red,
  },

  likeText: {
    fontSize: 12,
    color: colors.gray,
  },

  likesComments: {
    padding: 16,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
