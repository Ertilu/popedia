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
import styles from './style'

class AddProduct extends React.Component {

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
        const numReg = /^[a-zA-Z]$/

        if (numReg.test(this.state.code)) {
            this.props.navigation.navigate("Home")
        } else {
            Toast.show({
                text: "Isi dengan benar",
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
                        <Title style={styles.textHeader}>Tambah produk</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <Form >
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>nama</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>gambar</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>kategori</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>kuantitas</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>deskripsi</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>price</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                    </Form>


                    <View style={{ marginTop: 20 }} padder>
                        <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.validate()}>
                            <Text style={{ fontWeight: "600" }} uppercase={false} bold>Kirim</Text>
                        </Button>
                        <Text style={styles.loginOption}>Isi produk dengan benar</Text>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default AddProduct;
