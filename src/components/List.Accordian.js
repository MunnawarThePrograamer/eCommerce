import React from 'react';
import { View, ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import SearchBar from './SearchBar';
import HorizontalScrollView from './CarouselComponent';
import ProductCard from './productCard';

const ListItem = ({ title }) => (
  <>
    <List.Item
      titleStyle={{ color: 'white' }}
      title={title}
      style={{ backgroundColor: 'black' }}
    />
    <Divider />
  </>
);

const List_Accordion = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const categories = [
    'Accessories',
    'Furniture',
    'Electronics',
    'Cloths',
    'Bags',
    'Home appliances',
  ];

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <List.Section>
          <List.Accordion
            title="Shop by category"
            expanded={expanded}
            onPress={handlePress}
            left={(props) => <List.Icon {...props} icon="bag-personal" />}
          >
            {categories.map((category, index) => (
              <ListItem key={index} title={category} />
            ))}
          </List.Accordion>
        </List.Section>
        <SearchBar />
        <HorizontalScrollView/>
       
        <ProductCard />
      </View>
    </ScrollView>
  );
};

export default List_Accordion;
