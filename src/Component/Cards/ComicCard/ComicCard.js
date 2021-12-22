import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./ComicCardStyle";

const ComicCard = ({item}) => {
  return(
    <TouchableOpacity style={styles.container}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default ComicCard