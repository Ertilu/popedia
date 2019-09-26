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

class Otp extends React.Component {

    constructor() {
        super()
        this.state = {
            num: '',
            numValidate: true,
            code: '',
        }
    }

    onChangeHandler(number) {
        this.setState({ code: number })
    }

    validate() {
        const numReg = /^\d{6}$/

        if (numReg.test(this.state.code)) {
            this.props.navigation.navigate("Home")
        } else {
            Toast.show({
                text: "Invalid code",
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
                    </View>

                </Content>
            </Container>
        );
    }
}

export default Otp;
