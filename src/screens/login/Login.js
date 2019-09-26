import * as React from "react";
import { Image, Platform, TouchableOpacity } from "react-native";
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
  Icon
} from "native-base";
import styles from './styles'

class Login extends React.Component {
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
            <Title style={styles.textHeader}>{lang.login}</Title>
          </Body>
          <Right>
            <Button onPress={() => navigation.navigate("Profile")} transparent>
              <Text style={{ color: '#2aaa4d' }} uppercase={false}>{lang.signup}</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {this.props.loginForm}
          <Text style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPassword")}>{lang.forgot_password}</Text>
          <View style={{ marginTop: 20 }} padder>
            <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.props.onLogin()}>
              <Text style={{ fontWeight: "600" }} uppercase={false} bold>{lang.next}</Text>
            </Button>

            <Text style={styles.loginOption}>{lang.login_option}</Text>

            <Button style={styles.buttonOption} full bordered>
              <Icon style={styles.iconMedia} type="FontAwesome" name='google' />
              <Text uppercase={false} style={styles.textMedia}>Google</Text>
            </Button>
            <Button style={styles.buttonOption} f ull bordered>
              <Icon style={styles.iconMedia} type="FontAwesome" name='facebook' />
              <Text uppercase={false} style={styles.textMedia}>Facebook</Text>
            </Button>
            <Button style={styles.buttonOption} full bordered>
              <Icon style={styles.iconMedia} type="FontAwesome" name='yahoo' />
              <Text uppercase={false} style={styles.textMedia}>Yahoo</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.loginOption}>{lang.not_have_account} <Text style={{ color: '#2aaa4d', fontSize: 13 }}> {lang.signup}</Text></Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}

export default Login;
