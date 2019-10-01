import * as React from "react";
import {
  Container,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Footer,
  Header,
  Item,
  Badge
} from "native-base";

import {
  ScrollView,
  View,
  Image,
  Animated,
  FlatList,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import Swiper from 'react-native-swiper';

import styles from "./styles";
import { connect } from "react-redux";
import { BASE_URL } from "../../router";
import { addToCart } from '../../redux/actions/cartActions';
import axios from 'axios'

const HEADER_HEIGHT = 60
const MAX_SCROLL_OFFSET = 400

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
      cart: 0,
      user_id: '',
    }

    AsyncStorage.getItem('bindID').then(data => this.setState({ user_id: data }))
  }

  deleteProduct = () => {
    const item = this.props.navigation.getParam('item')

    Promise.all(item).then(() => {
      alert(item._id)
      axios.delete(`${BASE_URL}/api/products/${_id}`)
        .then(res => {
          Toast.show({
            text: 'Hapus data berhasil',
            duration: 2000,
            position: 'bottom',
            textStyle: { textAlign: 'center' }
          })
        })
    })
  }

  handleScroll = (event) => {
    this.setState({
      scrollY: event.nativeEvent.contentOffset.y
    })
  }

  addItemsToCart = () => {
    const { item } = this.state

    const exist = this.props.cartItems.filter(data => data._id == item._id)

    if (exist.length == 0) {
      this.props.addToCart(item);
      this.props.navigation.navigate('Cart')

    } else {
      this.props.navigation.navigate('Cart')
    }
  }

  componentDidMount() {
    this.setState({ item: this.props.navigation.getParam('item') })
  }

  addWishlist = () => {
    const item = this.props.navigation.getParam('item', {});
    if (this.state.user_id == null) {
      this.props.navigation.navigate("Login")
    } else {    
      axios 
      .post(`${BASE_URL}/api/wishlists`, 
        {
          "user_id": this.state.user_id,
          "product_id": [
            item._id  
          ]
        }
      )
      alert('Berhasil menambah ke wishlist produk ' + item.name);
    }
  }

  render() {
    const { navigation, lang, cartItems } = this.props
    const { scrollY } = this.state

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, MAX_SCROLL_OFFSET],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: 'clamp',
    });

    const onScroll = scrollY > 45

    const item = navigation.getParam('item', {});

    const images = item ? [item.image] : [];
    const info = [
      { label: 'Berat', value: '300 gram' },
      { label: 'Kondisi', value: 'New' },
      { label: 'Asuransi', value: 'Opsional' },
      { label: 'Pemesanan Min', value: '1 Buah' },
      { label: 'Kategori', value: item.category_id.name },
    ] || [];
    const description = item.description ? item.description.replace(/↵/gi, '\n') : '';

    return (
      <Container style={styles.container} >
        <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslate }] }]}>
          <View>
            <Button
              transparent
              onPress={() => { navigation.goBack() }}
            >
              <Icon style={styles.icon} name="arrow-back" />
            </Button>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button transparent>
              <Icon style={styles.icon} name="share" />
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate('Cart')} s>
              <View style={styles.cartView}><Text style={styles.cartText}>{(cartItems).length}</Text></View>
              <Icon style={styles.icon} name="cart" />
            </Button>
            <Button transparent>
              <Icon style={styles.icon} name="more" />
            </Button>
          </View>
        </Animated.View>
        <Content
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } }
              }
            ]
          )}
        >
          <View>
            <Swiper
              autoplay
              autoplayTimeout={2}
              dotStyle={styles.swiperDot}
              activeDotStyle={styles.swiperActiveDot}
              style={{ height: 400 }}
              paginationStyle={styles.swiperPagination}
            >
              {images.map((image, i) => {
                return (
                  <View
                    style={{ flex: .9, justifyContent: 'flex-start' }}
                    key={i}
                  >
                    <Image
                      source={{ uri: `${BASE_URL}` + item.image }}
                      style={{
                        flex: 1,
                        height: '100%',
                        width: '100%',
                      }}
                    />
                    <TouchableOpacity onPress={this.addWishlist}>
                      <View>
                        <Text>
                          
                        </Text>
                        <Badge primary style={styles.badge}>
                          <Icon name="heart" style={styles.badgeIcon} />
                        </Badge>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </Swiper>
          </View>

          <View style={[styles.boxShadow, { marginTop: -45 }]}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>Rp {item.price}</Text>
            </View>

            <View>
              <Text style={{ fontSize: 11, color: 'gray' }}>Produk dari Popedia</Text>
            </View>
            <View
              style={styles.horizontalLine}
            />
            <View>
              <Text style={{ fontSize: 11, fontWeight: "800", color: 'black' }}>Stock terbatas! <Text style={{ fontSize: 11, }}>Tersedia >50</Text></Text>
            </View>
            <View style={styles.wrapper}>
              <View style={styles.wrapInfo}>
                <Text style={styles.text1}>Dilihat</Text>
                <Text style={styles.text2}>66,27rb</Text>
              </View>
              <View style={styles.wrapInfo}>
                <Text style={styles.text1}>Transaksi Berhasil</Text>
                <Text style={styles.text2}>99,33%</Text>
              </View>
              <View style={styles.wrapInfo}>
                <Text style={styles.text1}>Wishlisht</Text>
                <Text style={styles.text2}>1193</Text>
              </View>
            </View>
          </View>

          <View style={[styles.boxShadow]}>
            <View>
              <Text style={styles.title}>Info Produk :</Text>
              {
                info.map(item => (
                  <View style={styles.infoList}>
                    <Text style={styles.description}>{item.label}</Text>
                    <Text style={styles.description}>{item.value}</Text>
                  </View>
                ))
              }
              <Text style={styles.description}></Text>
            </View>
            <View>
              <Text style={styles.title}>Deskripsi Produk :</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </Content>

        {this.state.user_id == item.user_id._id ?
          <Footer>
            <View style={styles.footer}>
              <Button style={styles.buttonBuy} bordered>
                <Text style={{ color: 'red', fontSize: 12 }} uppercase={false} onPress={() => this.deleteProduct()}>Hapus produk</Text>
              </Button>
            </View>
          </Footer>
          :
          <Footer>
            <View style={styles.footer}>
              <Button style={{ borderColor: 'lightgray', borderRadius: 5 }} bordered>
                <Icon style={{ color: 'gray' }} name='chatbubbles' />
              </Button>
              <Button
                style={styles.buttonBuy} bordered
                onPress={() => navigation.navigate("Cart")}
              >
                <Text style={{ color: '#FF582F', fontSize: 12 }} uppercase={false}>Beli</Text>
              </Button>
              <Button
                style={styles.buttonCart}
                onPress={this.addItemsToCart}
              >
                <Text style={{ fontSize: 12 }} uppercase={false}>Tambah Keranjang</Text>
              </Button>
            </View>
          </Footer>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart
});

export default connect(mapStateToProps, { addToCart })(Product);
// export default Product;