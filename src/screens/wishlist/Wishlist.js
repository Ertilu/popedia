import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  Alert
} from 'react-native';
import { Button, Header, Left, Right, Icon, Title } from 'native-base'
import axios from 'axios'
import { NavigationEvents } from 'react-navigation';
// // import { getproducts } from '../Services/Axios/products';
// // import SimpleHeader from '../Components/Navigation/SimpleHeader';
import { BASE_URL } from "../../router";

class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wishlists: [],
      user_id: '',
    }
    AsyncStorage.getItem('bindID').then(data => this.setState({ user_id: data }))
  }

  componentDidMount() {
    this.getWishlists();
  }

  getWishlists = () => {
    const queryView = `${BASE_URL}/api/wishlists/${this.state.user_id}`
    axios
      .get(queryView)
      .then(res => {
        this.setState({ wishlists: res.data.data })
      })
  }

  delete = id => {
    Alert.alert(
      'Konfirmasi',
      'Apa kamu yakin ingin menghapus produk ini dari keranjang?',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'Yes', onPress: () => axios
            .delete(`http://ec2-54-204-153-133.compute-1.amazonaws.com:4869/api/wishlists/${id}`)
            .then(
              alert('Wishlist telah dihapus'),
              this.props.navigation.navigate("Home")
            )
            .catch(error => alert('error gan'))
        },
      ],
      { cancelable: true }
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.listWrapper}>
        <NavigationEvents
          onDidFocus={this.getWishlists()}
        />
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button onPress={() => this.props.navigation.navigate("Home")} transparent>
              <Icon style={{ color: 'gray' }} name='arrow-back' />
              <Title style={{ color: 'gray', fontWeight: "600" }}>   Wishlist</Title>
            </Button>
          </Left>
          <Right>
          </Right>
        </Header>
        <FlatList
          data={this.state.wishlists}
          renderItem={({ item }) =>
            <Button
              transparent
              style={styles.listMenu}
            >
              <Image
                source={{ uri: `${BASE_URL}` + item.product_id.image }}
                style={styles.menuIcon}
              />
              <View style={styles.menuText}>
                <Text numberOfLines={2} style={styles.name}>
                  {item.product_id.name}
                </Text>
                <Text numberOfLines={1} style={styles.price}>
                  Rp {item.product_id.price}
                </Text>
              </View>
              <View>
                <View style={styles.footer}>
                  <Button transparent onPress={() => this.delete(item._id)} style={{ marginRight: 130, marginBottom: -45 }}>
                    <Icon name='trash' style={styles.trashIcon} />
                  </Button>
                  <Button
                    style={styles.buy}
                    onPress={() => { navigation.navigate('Product', { item: item.product_id }); }}
                  >
                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 20 }} uppercase={false}>Beli</Text>
                  </Button>
                </View>
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
    height: 270,
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
  },
  buy: {
    color: 'white',
    fontSize: 12,
    backgroundColor: '#FF582F',
    borderRadius: 5,
    width: 70,
    marginLeft: 95,
    textAlign: 'right'
  },
  footer: {
    alignItems: 'center'
  },
  trashIcon: {
    fontSize: 40,
    color: '#bdbdbd',
  },
});

// const mapsStageToProps = (state) => {
//     return {
//         products: state.products
//     }
// };

// export default connect(null, addToCart)(Product);
export default Wishlist;