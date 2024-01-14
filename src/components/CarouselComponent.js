import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
const data = [
  { id: "1", image: require("../utils/assets/images/banner/bannerImgOne.webp") },
  { id: "2", image: require("../utils/assets/images/banner/bannerImgTwo.webp") },
  { id: "3", image: require("../utils/assets/images/banner/bannerImgThree.webp") },
  // Add more data objects as needed
];

const SwiperComponent = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
      {data.map((item) => (
        <View key={item.id} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <View>
            <Text style={styles.description}>Two years warranty</Text>
            <Text style={styles.description}>Free Shipping</Text>
            <Text style={styles.description}>Return Policy in 30Days</Text>
          </View>
        </View>
      ))}

    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {marginTop:"10px"},
  image: {
    width: "100%",
    height: 250,
  },
  description: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default SwiperComponent;