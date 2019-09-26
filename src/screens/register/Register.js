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
  Form
} from "native-base";
import styles from './styles'

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

class Register extends React.Component {

  register() {
    if (this.props.valid) {
      this.props.navigation.navigate("Register");
    } else {
      Toast.show({
        text: "Username, email, password doesn't wekwew",
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
            {/* <Title style={styles.textHeader}>{lang.register}</Title> */}
            <Title style={styles.textHeader}>Daftar</Title>
          </Body>
          <Right>
            <Button onPress={() => navigation.navigate("Login")} transparent>
              {/* <Text style={{ color: '#2aaa4d' }} uppercase={false}>{lang.signin}</Text> */}
              <Text style={{ color: '#2aaa4d' }} uppercase={false}>Masuk</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {this.props.registerForm}

          <Form >
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>name</Label>
              <Input validate={[email]} />
            </Item>
            <Item floatingLabel style={styles.itemRegister}>
              <Label style={styles.registerForm}>email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.registerForm}>password</Label>
              <Input />
            </Item>
          </Form>


          <View style={{ marginTop: 20 }} padder>
            <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => navigation.navigate("Otp")}>
              {/* <Text style={{ fontWeight: "600" }} uppercase={false} bold>{lang.next}</Text> */}
              <Text style={{ fontWeight: "600" }} uppercase={false} bold>Daftar</Text>
            </Button>

            {/* <Text style={styles.loginOption}>{lang.login_option}</Text> */}
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
              {/* <Text style={styles.loginOption}>{lang.not_have_account} {lang.signup}</Text> */}
              <Text style={styles.loginOption}>sudah punya akun tokopedia? <Text style={{ color: '#2aaa4d', fontSize: 13 }}>Masuk</Text> </Text>

            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}

export default Register;
