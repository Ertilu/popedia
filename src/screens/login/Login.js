import * as React from "react";
import { Image, Platform, TouchableOpacity, TextInput, AsyncStorage } from "react-native";
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Footer,
  Left,
  Right,
  Icon,
  Item,
  Label,
  Input,
  Form,
  Toast
} from "native-base";
import styles from './styles'
import { BASE_URL } from "../../router";

import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      nameValidate: true,
      email: '',
      password: '',
    }
  }

  onChangeHandler(text, key) {
    this.setState({ [key]: text })
  }

  validate() {
    const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (mail.test(this.state.email)) {
      axios.post(`${BASE_URL}/api/users/login`, { email: this.state.email, password: this.state.password })
        .then(res => {
          AsyncStorage.setItem('bindID', res.data.user._id)
          AsyncStorage.setItem('name', res.data.user.name)
          this.props.navigation.navigate('Home')
        })
        .catch(err => {
          if (err.response) {
            if (err.response.data.validate == false) {
              Toast.show({
                text: 'Silahkan verifikasi kode',
                duration: 2000,
                position: 'bottom',
                textStyle: { textAlign: 'center' }
              })
              setTimeout(() => this.props.navigation.navigate("Otp", { email: this.state.email }), 2500)
            } else {
              Toast.show({
                text: 'Email atau Password salah',
                duration: 2000,
                position: 'bottom',
                textStyle: { textAlign: 'center' }
              })
            }
          } else if (err.request) {
            Toast.show({
              // text: JSON.stringify({ ...err.request }) // request from axios
              text: 'terjadi kesalahan pada koneksi',
              duration: 2000,
              position: 'bottom',
              textStyle: { textAlign: 'center' }

            })
          }
        })
    } else {
      Toast.show({
        text: "Email & password harus benar",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header androidStatusBarColor={'#2aaa4d'} style={styles.header}>
          <Left>
            <Button onPress={() => navigation.goBack()} transparent>
              <Icon style={styles.textHeader} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Masuk</Title>
          </Body>
          <Right>
            <Button onPress={() => navigation.navigate("Register")} transparent>
              <Text style={{ color: '#2aaa4d' }} uppercase={false}>Daftar</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {this.props.registerForm}

          <Form >
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>email</Label>
              <Input onChangeText={(text) => this.onChangeHandler(text, 'email')} />
            </Item>
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>password</Label>
              <Input secureTextEntry={true} onChangeText={text => this.onChangeHandler(text, 'password')} />
            </Item>
          </Form>

          <View style={{ marginTop: 20 }} padder>
            <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.validate()}>
              <Text style={{ fontWeight: "600" }} uppercase={false} bold>Masuk</Text>
            </Button>

            <Text style={styles.loginOption} onPress={() => navigation.navigate("ForgotPassword")}>Lupa password ?</Text>
            <Button style={styles.buttonOption} full bordered>
              <Icon style={styles.iconMedia} type="FontAwesome" name='google' />
              <Text uppercase={false} style={styles.textMedia}>Google</Text>
            </Button>
            <Button style={styles.buttonOption} full bordered>
              <Icon style={styles.iconMedia} type="FontAwesome" name='facebook' />
              <Text uppercase={false} style={styles.textMedia}>Facebook</Text>
            </Button>
            <Button style={styles.buttonOption} full bordered>
              <Icon style={styles.iconMedia} type="FontAwesome" name='yahoo' />
              <Text uppercase={false} style={styles.textMedia}>Yahoo</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.loginOption}>belum punya akun Popedia? <Text style={{ color: '#2aaa4d', fontSize: 13 }}>Daftar</Text> </Text>

            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}

export default Login;
