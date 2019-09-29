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
import axios from 'axios'

class ForgotPassword extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            nameValidate: true,
            email: '',
        }
    }

    onChangeHandler(text, key) {
        this.setState({ [key]: text })
    }

    validate() {
        const mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (mail.test(this.state.email)) {
            axios.post('http://192.168.0.116:4869/api/users/forgot', { email: this.state.email })
                .then(res => {
                    Toast.show({
                        text: 'Silahkan cek email untuk reset password',
                        duration: 3000,
                        position: 'top',
                        textStyle: { textAlign: "center" }
                    })
                    this.props.navigation.navigate("Login")
                })
                .catch(err => {
                    Toast.show({
                        text: err.response.data.message,
                        duration: 2000,
                        position: 'top',
                        textStyle: { textAlign: "center" }
                    })
                })
            setTimeout(() => this.props.navigation.navigate("Login", { email: this.state.email }), 2500)
        } else {
            Toast.show({
                text: "Invalid email",
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
                        <Title style={styles.textHeader}>Forgot Password</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <Form >
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>Masukkan email</Label>
                            <Input onChangeText={(text) => this.onChangeHandler(text, 'email')} />
                        </Item>
                    </Form>


                    <View style={{ marginTop: 20 }} padder>
                        <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.validate()}>
                            {/* <Text style={{ fontWeight: "600" }} uppercase={false} bold>{lang.next}</Text> */}
                            <Text style={{ fontWeight: "600" }} uppercase={false} bold>Kirim</Text>
                        </Button>

                        {/* <Text style={styles.loginOption}>{lang.login_option}</Text> */}
                        <Text style={styles.loginOption}>Cek email untuk ubah password baru <Text style={{ color: '#2aaa4d', fontSize: 13 }} onPress={() => navigation.navigate("Register")}>Lagi</Text></Text>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default ForgotPassword;
