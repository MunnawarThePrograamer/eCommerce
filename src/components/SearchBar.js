import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (

<Searchbar
    placeholder="Search your product"
    onChangeText={setSearchQuery}
    value={searchQuery}
    icon="magnify" // Set the search icon
    onIconPress={() => {}}
    iconColor="#000" // Set the color of the icon
    style={{
      backgroundColor: 'white',
      borderRadius:0
    
    }}
    inputStyle={{ color: 'black' }} // Change text color
  />
  );
};

export default CustomSearchBar;
