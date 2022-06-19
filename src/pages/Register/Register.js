import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Colors, fonts } from '../../utils'
import { Logo } from '../../assets'
import { Button, Gap, Input, Inputan, Link } from '../../components'
import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                    <View style={styles.page}>
                        <Gap Height={22} />
                        <View style={styles.header}>
                            <Logo />
                            <Gap Height={18} />
                            <Text style={styles.title}>Daftar</Text>
                        </View>
                        <View style={styles.FormLogin}>
                        <Inputan place="Full Name" type="Secondary" placeColor="white"/>
                        <Inputan place="Email"  type="Secondary" placeColor="white"/>
                        <Inputan place="No Handphone" secureTextEntry type="Secondary" placeColor="white" keyboardType="number-pad"/>
                        <Inputan place="Password"  type="Secondary" placeColor="white"/>
                        <Gap Height={22} />
                        <Button Title="Continue" onPress={()=>this.props.navigation.navigate('Register2')} />
                        <Gap Height={22} />
                        <Link title="Tidak Punya Account?" links="Daftar" onPress={()=>this.props.navigation.navigate('Register')} />
                        </View>
                    </View>
                    </ScrollView>
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