import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'native-base'
import axios from 'axios'
// import { getproducts } from '../Services/Axios/products';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class Product extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    await axios
      .get(
        `http://192.168.0.111:4869/api/products`
      )
      .then(res =>
        this.setState({
          products: res.data.data
        })
      );
    console.log(this.state);
  }
  renderItem = ({ item }) => (
    <Button
      transparent
      style={styles.listMenu}
      onPress={()=> { this.props.navigation.navigate('Product', { item } ); }}
    >
      <Image
        source={{uri: item.image}}
        style={styles.menuIcon}
      />
      <View style={styles.menuText}>
        <Text numberOfLines={2} style={styles.name}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.price}>
          {item.price}
        </Text>
      </View>
    </Button>
)
  render() {
    return (
      <View style={styles.listWrapper}>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
          <Button
            transparent
            style={styles.listMenu}
            onPress={()=> { this.props.navigation.navigate('Product', { item } ); }}
          >
          <Image
          source={{uri: 'http://192.168.0.111:4869/api/products/images/0632961e-2b6a-402f-9b19-e45a742c9f86asus-rog-strix-g531gv-15-6-inch-gaming-laptop.jpg'}}
          style={styles.menuIcon}
          />
          <View style={styles.menuText}>
            <Text numberOfLines={2} style={styles.name}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.price}>
              {item.price}
            </Text>
          </View>
          </Button>
          }
          keyExtractor={({id}) => id}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    padding: 10
  },
  listMenu: {
    height: 225,
    flexDirection: 'column',
    margin: 5,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(229, 231, 233)',
    backgroundColor: 'white'
  },
  menuIcon: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
  },
  menuText: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    top: 145,
    width: '100%',
    padding: 7,
    
  },
  name: {
    fontSize: 14
  },
  price: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgb(250, 89, 29)'
  }
});

// const mapsStageToProps = (state) => {
//     return {
//         products: state.products
//     }
// };

export default Product;