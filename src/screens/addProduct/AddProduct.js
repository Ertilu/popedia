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
    Icon,
    Item,
    Label,
    Input,
    Form,
    Toast, Picker
} from "native-base";
import { BASE_URL } from '../../router'
import ImagePicker from 'react-native-image-picker';
import styles from './style'

class AddProduct extends React.Component {

    constructor() {
        super()
        this.state = {
            num: '',
            numValidate: true,
            code: '',
            filePath: {},
            selected: undefined,
            categories: []
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    onChangeHandler(number) {
        this.setState({ code: number })
    }

    validate() {
        // const nameReg = /^[a-zA-Z]$/
        // const quantityReg = /^[0-9]$/
        const nameReg = /^[a-zA-Z]$/

        if (nameReg.test(this.state.code)) {
            this.props.navigation.navigate("MyProduct")
        } else {
            Toast.show({
                text: "Isi dengan benar",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" }
            });
        }
    }

    chooseFile = () => {
        let options = {
            title: 'Pilih Gambar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                alert('Batal Pilih Gambar');
            } else if (response.error) {
                alert('Pilih Gambar Error: ' + response.error);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };

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
                        <Image
                            source={{ uri: this.state.filePath.uri }}
                            style={{ width: 300, alignSelf: 'center', marginBottom: '5%', marginTop: '5%', borderWidth: 2, borderColor: 'gray', height: 200, borderRadius: 10 }}
                        />
                        <Button
                            style={{ borderWidth: 2, borderColor: 'gray', width: '70%', backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center', borderRadius: 10 }}
                            onPress={this.chooseFile.bind(this)}>
                            <Text style={{ color: 'gray' }}>Pilih Gambar Produk</Text>
                        </Button>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>nama</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Form >
                            <Picker
                                mode="dropdown"
                                placeholder="Pilih"
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                style={styles.registerForm}
                            >
                                <Picker.Item label="-- Pilih kategori --" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>kuantitas</Label>
                            <Input keyboardType='numeric' />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>deskripsi</Label>
                            <Input onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>price</Label>
                            <Input keyboardType='number-pad' onChangeText={(number) => this.onChangeHandler(number)} />
                        </Item>
                    </Form>


                    <View style={{ marginTop: 20 }} padder>
                        <Button style={{ backgroundColor: '#2aaa4d' }} block onPress={() => this.validate()}>
                            <Text style={{ fontWeight: "600" }} uppercase={false} bold >Kirim</Text>
                        </Button>
                        <Text style={styles.loginOption}>Isi produk dengan benar</Text>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default AddProduct;
