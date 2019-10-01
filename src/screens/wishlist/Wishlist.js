import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage
} from 'react-native';
import { Button, Header, Left, Right, Icon, Title, Body, Footer } from 'native-base'
import axios from 'axios'
// // import { getproducts } from '../Services/Axios/products';
// // import SimpleHeader from '../Components/Navigation/SimpleHeader';
import { BASE_URL } from "../../router";

class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      whislists: [],
      user_id: '',
      isLoading: true,
    }
    AsyncStorage.getItem('bindID').then(data => this.setState({ user_id: data }))
  }

  async componentDidMount() {    
    const queryView = `${BASE_URL}/api/whislists/${this.state.user_id}`
    await axios 
    // .get("https://randomproduct.me/api/?results=5")
    .get(queryView)
    .then(response =>
      response.data.data[0].product_id.map(whislist => ({
        id: `${whislist._id}`,
        name: `${whislist.name}`,
        image: `${whislist.image}`,
        price: `${whislist.price}`,
        user_id: `${whislist.user_id}`
      }))
    )
    .then(whislists => {
      this.setState({
        whislists,
        isLoading: false
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));
    console.warn(this.state.whislists.name);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.listWrapper}>
          <Header style={{ backgroundColor: 'white' }}>
              <Left>
                  <Button onPress={() => this.props.navigation.navigate("Home")} transparent>
                      <Icon style={{color: 'gray'}} name='arrow-back' />
                      <Title style={{ color: 'gray', fontWeight: "600" }}>   Wishlist</Title>
                  </Button>
              </Left>
              <Right>
              </Right>
          </Header>
        <FlatList
          data={this.state.whislists}
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
              <View> 
              <View style={styles.footer}>
                <Button
                  style={styles.buttonBuy} bordered
                  onPress={() => navigation.navigate('Product', { item })}
                >
                  <Text style={{ color: '#FF582F', fontSize: 12 }} uppercase={false}>Beli</Text>
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