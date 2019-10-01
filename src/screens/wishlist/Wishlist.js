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
import { Button, Header, Left, Right, Icon, Title, Body } from 'native-base'
import axios from 'axios'
// // import { getproducts } from '../Services/Axios/products';
// // import SimpleHeader from '../Components/Navigation/SimpleHeader';
import { BASE_URL } from "../../router";

class Wishlist extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    await axios
      .get(
        // `http://192.168.0.110:4869/api/products`
        `${BASE_URL}/api/products`
      )
      .then(res =>
        this.setState({
          products: res.data.data
        })
      );
    console.log(this.state);
  }

  render() {

    return (
      <View style={styles.listWrapper}>
          <Header style={{ backgroundColor: 'white' }}>
              <Left>
                  <Button onPress={() => navigation.navigate("Home")} transparent>
                      <Icon style={styles.textHeader} name='arrow-back' />
                      <Title style={{ color: 'gray', fontWeight: "600" }}>   Kembali</Title>
                  </Button>
              </Left>
              <Right>
              </Right>
          </Header>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
            <Button
              transparent
              style={styles.listMenu}
              onPress={() => { this.props.navigation.navigate('Product', { item }); }}
            >
              <Image
                source={{ uri: `${BASE_URL}` + item.image }}
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
          keyExtractor={({ id }) => id}
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
export default Wishlist;