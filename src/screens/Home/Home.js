import React, { Component } from 'react'
import { View } from 'react-native'

import { withNavigation } from 'react-navigation'
import { Container, Header, Content, Button, Text } from 'native-base';

import Menu from '../../components/Menu'
import ButtomBar from '../../components/ButtomBar'

class Home extends Component {
    render() {
        return (
            <View>
                <Menu />
                <ButtomBar />
            </View>
        )
    }
}

export default withNavigation(Home)