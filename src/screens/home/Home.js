import React, { Component } from "react";
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
} from "native-base";
import axios from 'axios';

import {
  ScrollView,
  View,
  StatusBar,
  Animated
} from "react-native";

import styles from "./styles";
import BottomBar from "../../components/BottomBar";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Menu from "../../components/Menu";
import HomeCategory from "../../components/HomeCategory";
import ProductList from "../../components/ProductList";
import Maintenance from "../maintenance/404";

const HEADER_HEIGHT = 60
const MAX_SCROLL_OFFSET = 200

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
      scroll: 0,
      categories: [],
      isLoading: true,
      errors: null
    }
  }

  handleScroll(event) {
    this.setState({
      scroll: event.nativeEvent.contentOffset.y
    })
    Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
      { onScroll: this.props.onScroll }
    )(event)
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    const queryView = `http://192.168.0.116:4869/api/categories`
    axios 
    // .get("https://randomproduct.me/api/?results=5")
    .get(queryView)
    .then(response =>
      response.data.data.map(category => ({
        id: `${category._id}`,
        name: `${category.name}`,
      }))
    )
    .then(categories => {
      this.setState({
        categories,
        isLoading: false
      })
    })
 
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { navigation } = this.props
    const { scrollY, scroll } = this.state

    const onScroll = scroll > 70

    const headerColor = scrollY.interpolate({
      inputRange: [0, MAX_SCROLL_OFFSET],
      outputRange: ['#2aaa4d', 'white'],
      extrapolate: 'clamp',
    });

    const searchColor = scrollY.interpolate({
      inputRange: [0, MAX_SCROLL_OFFSET],
      outputRange: ['white', '#F6F6F6'],
      extrapolate: 'clamp',
    });

    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor={headerColor} barStyle="light-content" />
        <Header
          onScroll={onScroll}
          color={onScroll ? '#9DA5AE' : 'white'}
          backgroundColor={headerColor}
          searchColor={searchColor}
          navigation={navigation}
        />
        <Content
          scrollEventThrottle={16}
          onScroll={this.handleScroll.bind(this)}
        >
          <View style={styles.circle}>
            <View><Text>RAKA</Text></View>
          </View>
          <Slider />
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            {
            !this.state.isLoading ? (        
              this.state.categories.map((category, i) => { 
                return (
                  <Menu
                    key={category.id}
                    {...category}
                    index={i}
                  />
          
                );
              })
              ) : (
                <Text>Loading...</Text>
              )
            } 
          </ScrollView>
          <HomeCategory />
          <ProductList navigation={navigation} />
        </Content>
        <BottomBar
          navigation={navigation}
        />
      </Container>
    );
  }
}

export default Home;
