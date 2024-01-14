import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

const ProductCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={require("../utils/assets/images/products/newArrival/newArrFour.webp")}
        style={styles.cardImage}
      />
      <Card.Content style={styles.cardContent}>
        <Title>Funny Toys for Babies</Title>
        <Title>$99.99</Title>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <View>
          <Button
            icon="cart"
            mode="contained"
            onPress={() => console.log("Add to Cart")}
          >
            Add to Cart
          </Button>
        </View>
        <View>
          <Button
            icon="arrow-right-bold-circle"
            mode="contained"
            onPress={() => console.log("Buy Now")}
          >
            Buy Now
          </Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardImage: {
    height: 250,
  },
  cardContent: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProductCard;
