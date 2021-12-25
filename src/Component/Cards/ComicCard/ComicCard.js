import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./ComicCardStyle";

const ComicCard = ({item, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style ={styles.image}source={{uri:`${item.thumbnail.path}.jpg`}}></Image>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default ComicCard