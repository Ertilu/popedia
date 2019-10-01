import * as React from "react";
import { Image, Platform, TouchableOpacity, AsyncStorage } from "react-native";
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
import axios from 'axios'

class AddProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            num: '',
            numValidate: true,
            code: '',
            filePath: {},
            selected: undefined,
            categories: [],

            name: '',
            image: {},
            category_id: "5d8c05e5972fba12a8c1c956",
            description: '',
            quantity: 0,
            price: 0,
            user_id: '',

        }
        AsyncStorage.getItem('bindID').then(data => {
            this.setState({ user_id: data })
        })
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    onChangeHandler(text, key) {
        this.setState({ [key]: text })
    }

    validate() {
        // const nameReg = /^[a-zA-Z]$/
        // const quantityReg = /^[0-9]$/
        const nameReg = /^$/
        const { name, category_id, quantity, image, description, price, user_id } = this.state

        if (nameReg.test(this.state.code)) {

            const data = new FormData()
            data.append('name', name)
            data.append('category_id', category_id)
            data.append('quantity', quantity)
            data.append('image', { uri: image.uri, name: image.fileName, type: image.type })
            data.append('description', description)
            data.append('price', price)
            data.append('user_id', user_id)

            axios.post(`${BASE_URL}/api/products`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    this.props.navigation.navigate("MyProduct")
                })
                .catch(err => {

                    alert(JSON.stringify(this.state))
                    Toast.show({
                        text: err.response.message,
                        duration: 2000,
                        position: 'top',
                        textStyle: { textAlign: "center" }
                    })
                })
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
                path: 'image',
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
                    image: source,
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
                            source={{ uri: this.state.image.uri }}
                            style={{ width: 300, alignSelf: 'center', marginBottom: '5%', marginTop: '5%', borderWidth: 2, borderColor: 'gray', height: 200, borderRadius: 10 }}
                        />
                        <Button
                            style={{ borderWidth: 2, borderColor: 'gray', width: '70%', backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center', borderRadius: 10 }}
                            onPress={this.chooseFile.bind(this)}>
                            <Text style={{ color: 'gray' }}>Pilih Gambar Produk</Text>
                        </Button>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>nama</Label>
                            <Input onChangeText={(text) => this.onChangeHandler(text, 'name')} />
                        </Item>
                        <Form >
                            <Picker
                                mode="dropdown"
                                placeholder="Pilih"
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                                style={styles.registerForm}
                                onChangeText={(text) => this.onChangeHandler(text, 'category')}
                            >
                                <Picker.Item label="-- Pilih kategori --" />
                                <Picker.Item label="Olahraga" value="1" />
                                <Picker.Item label="Peralatan Dapur" value="2" />
                                <Picker.Item label="Gaming" value="3" />
                                <Picker.Item label="Pakaian" value="4" />
                                <Picker.Item label="Makanan" value="5" />
                            </Picker>
                        </Form>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>kuantitas</Label>
                            <Input keyboardType='numeric' onChangeText={(text) => this.onChangeHandler(text, 'quantity')} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>deskripsi</Label>
                            <Input onChangeText={(text) => this.onChangeHandler(text, 'description')} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.registerForm}>price</Label>
                            <Input keyboardType='number-pad' onChangeText={(text) => this.onChangeHandler(text, 'price')} />
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
