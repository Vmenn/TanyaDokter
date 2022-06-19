import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Colors, fonts } from '../../utils'
import { Logo } from '../../assets'
import { Button, Gap, Input, Inputan, Link } from '../../components'
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.page}>
                    <View style={styles.header}>
                        <Logo />
                        <Gap Height={18} />
                        <Text style={styles.title}>Masuk</Text>
                    </View>
                    <View style={styles.FormLogin}>
                    <Inputan place="Email"  type="Secondary" placeColor="white"/>
                    <Inputan place="Password" secureTextEntry type="Secondary" placeColor="white"/>
                        <Gap Height={22} />
                        <Link title="Lupa Password ?" posisi="tengah" />
                        <Gap Height={22} />
                        <Button Title="Masuk" onPress={()=>this.props.navigation.navigate('MainApp')} />
                        <Gap Height={22} />
                        <Link title="Tidak Punya Account?" links="Daftar" onPress={()=>this.props.navigation.navigate('Register')} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary,
        justifyContent: 'center',
    },
    page: {
        marginHorizontal: 15
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.primary.Bold,
        fontSize: 20,
        color: Colors.White,
    }
})