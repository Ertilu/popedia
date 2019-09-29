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
import { Button } from 'native-base'
import axios from 'axios'

class Product extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    await axios
      .get(
        `http://192.168.0.110:4869/api/products`
      )
      .then(res =>
        this.setState({
          products: res.data.data
        })
      );
    console.log(this.state);
  }

  render() {
    const addItem = this.props.addItemsToCart;

    return (
      <View style={styles.listWrapper}>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
          <Button
            transparent
            style={styles.listMenu}
            onPress={()=> { this.props.navigation.navigate('Product', { item, addItem } ); }}
          >
            <Image
            source={{uri: 'http://192.168.0.116:4869'+item.image}}
            style={styles.menuIcon}
            />
            <View style={styles.menuText}>
              <Text numberOfLines={2} style={styles.name}>
                {item.name}
              </Text>
              <Text numberOfLines={1} style={styles.price}>
                Rp {item.price}
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

// export default connect(null, addToCart)(Product);
export default Product;