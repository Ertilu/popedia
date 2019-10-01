import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import { Container, Footer, FooterTab, Button, Text, Icon } from 'native-base'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    color: 'gray'
  },
  menuIcon: {
    height: 27,
    width: 27
  },
  button: {
    width: 70,
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
      name: 'Account'
    }
  }

  profile = () => {
    AsyncStorage.getItem('bindID').then(data => {
      if (data === null) {
        // alert('not else ' + data)
        this.props.navigation.navigate("Login")
      } else {
        // alert('else ' + data)
        this.props.navigation.navigate("Profile")
      }
    })

  }

  render() {
    const { navigation } = this.props
    const navs = [
      {
        icon: "heart",
        text: 'Feed',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_7b72c368-d93e-41e1-8889-ef695ac5dc97.png.webp'
      }, {
        icon: "cart",
        text: 'Official Store',
        image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/4/20723472/20723472_1e37237f-b884-4791-9083-a0af29e92a08.png.webp'

      },
    ]

    return (
      <Footer>
        <View style={styles.wrapper} >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View
              style={styles.button}
            >
              <Image
                source={{ uri: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/11/20723472/20723472_8e83f5b5-b78a-477f-a28f-c416e5249cd0.png.webp' }}
                style={styles.menuIcon}
              />
              <Text numberOfLines={1} style={styles.text}>Home</Text>
            </View>
          </TouchableOpacity>
          {
            navs.map(item =>
              <TouchableOpacity onPress={() => navigation.navigate("Maintenance")}>
                <View
                  style={styles.button}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.menuIcon}
                  />
                  <Text numberOfLines={1} style={styles.text}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            )
          }
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <View
              style={styles.button}
            >
              <Image
                source={{ uri: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/14/20723472/20723472_42491eb8-4d07-44f0-9a79-03ea94fdfd27.png.webp' }}
                style={styles.menuIcon}
              />
              <Text numberOfLines={1} style={styles.text}>Keranjang</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (this.profile())}>
            <View
              style={styles.button}
            >
              <Image
                onPress={this.profile}
                source={{ uri: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_a42a010b-bd35-4279-8bea-84e7bb1bcfc0.png.webp' }}
                style={styles.menuIcon}
              />
              <Text numberOfLines={1} style={styles.text}>Akun</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Footer>
    )
  }
} 