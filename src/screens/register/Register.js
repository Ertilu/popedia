import * as React from "react";
import { Image, Platform, TouchableOpacity, TextInput } from "react-native";
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

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      nameValidate: true,
      email: '',
    }
  }

  onChangeHandler(text) {
    this.setState({ email: text })
  }

  validate() {
    const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (mail.test(this.state.email)) {
      this.props.navigation.navigate("Otp")
    } else {
      Toast.show({
        text: "Nama, email & password harus benar",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }


  render() {
    const { lang, navigation } = this.props
    return (
      <Container>
        <Header androidStatusBarColor={'#2aaa4d'} style={styles.header}>
          <Left>
            <Button onPress={() => navigation.goBack()} transparent>
              <Icon style={styles.textHeader} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Daftar</Title>
          </Body>
          <Right>
            <Button onPress={() => navigation.navigate("Login")} transparent>
              <Text style={{ color: '#2aaa4d' }} uppercase={false}>Masuk</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {this.props.registerForm}

          <Form >
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>email</Label>
              <Input onChangeText={(text) => this.onChangeHandler(text)} />
            </Item>
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>

          <View style={{ marginTop: 20 }} padder>
            <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.validate()}>
              <Text style={{ fontWeight: "600" }} uppercase={false} bold>Daftar</Text>
            </Button>

            <Text style={styles.loginOption}>Atau daftar dengan</Text>
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
              <Text style={styles.loginOption}>sudah punya akun tokopedia? <Text style={{ color: '#2aaa4d', fontSize: 13 }}>Masuk</Text> </Text>

            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}

export default Register;
