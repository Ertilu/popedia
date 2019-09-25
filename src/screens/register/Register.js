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

class Register extends React.Component {
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
          <View style={{ marginTop: 20 }} padder>
            <Button style={{ backgroundColor: '#2aaa4d' }} block >
              {/* <Text style={{ fontWeight: "600" }} uppercase={false} bold>{lang.next}</Text> */}
              <Text style={{ fontWeight: "600" }} uppercase={false} bold>Daftar</Text>
            </Button>

            {/* <Text style={styles.loginOption}>{lang.login_option}</Text> */}
            <Text style={styles.loginOption}>login gan</Text>

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
              <Text style={styles.loginOption}>gak punya akun ya?</Text>
            </TouchableOpacity>
          </View>

        </Content>
      </Container>
    );
  }
}

export default Register;
