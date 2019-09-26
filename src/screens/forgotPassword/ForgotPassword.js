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

class ForgotPassword extends React.Component {
    render() {
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
                        <Title style={styles.textHeader}>Forgot Password</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <Form >
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>Masukkan email</Label>
                            <Input />
                        </Item>
                    </Form>


                    <View style={{ marginTop: 20 }} padder>
                        <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => navigation.navigate("Login")}>
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
