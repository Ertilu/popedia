import * as React from "react";
import { Image, Platform, TouchableOpacity, AsyncStorage, TextInput } from "react-native";
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
import { BASE_URL } from "../../router";


import { NavigationEvents } from 'react-navigation'

class Otp extends React.Component {

    constructor() {
        super()
        this.state = {
            num: '',
            numValidate: true,
            code: '',
            email: ''
        }
    }

    onChangeHandler(number) {
        this.setState({ num: number })
    }

    resend = () => {
        axios.post(`${BASE_URL}/api/users/resend`, { email: this.state.email })
            .then(() => {
                Toast.show({
                    text: "New Code Has Been Send",
                    duration: 2000,
                    position: "top",
                    textStyle: { textAlign: "center" }
                });
            })
    }

    getEmail() {
        this.setState({ email: this.props.navigation.getParam('email') })
        alert(this.props.navigation.getParam('email'))
    }




    validate() {
        const numReg = /^\d{6}$/
        alert(this.state.num)
        if (numReg.test(this.state.num)) {
            axios.post(`${BASE_URL}/api/users/verify`, { otp: this.state.num, email: this.state.email })
                .then(res => {
                    AsyncStorage.setItem('name', res.data.user.name)
                    this.props.navigation.navigate("Home")
                })
                .catch(err => {
                    Toast.show({
                        text: JSON.stringify(err),
                        duration: 2000,
                        position: "top",
                        textStyle: { textAlign: "center" }
                    });
                })


        } else {
            Toast.show({
                text: "Invalid code format",
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
                <NavigationEvents
                    onDidFocus={() => this.getEmail()}
                />
                <Header androidStatusBarColor={'#2aaa4d'} style={styles.header}>
                    <Left>
                        <Button onPress={() => navigation.goBack()} transparent>
                            <Icon style={styles.textHeader} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.textHeader}>Verifikasi Kode</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <Form >
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>Masukkan kode</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                    </Form>


                    <View style={{ marginTop: 20 }} padder>
                        <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.validate()}>
                            <Text style={{ fontWeight: "600" }} uppercase={false} bold>Kirim</Text>
                        </Button>
                        <Text style={styles.loginOption}>Kode harus 6 digit</Text>

                        <TouchableOpacity onPress={() => this.resend()}>
                            <Text style={{ fontSize: 15, color: 'lightgreen' }}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default Otp;
