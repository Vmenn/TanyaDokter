import { StyleSheet, View, ScrollView } from 'react-native'
import { Header, HeaderComponent, Gap, Inputan, Tombol, Button } from '../../components'
import React, { Component } from 'react'
import { Colors } from '../../utils'



export default class ChangePassword extends Component {
    render() {
        return (
            <View style={styles.pages}>
                    <HeaderComponent Title="EditProfile" onPress={() => this.props.navigation.goBack()} />
                    <View style={styles.formAction}>
                        <View style={styles.fromInputdata}>
                            <Inputan label="Password Lama" height={38} secureTextEntry />
                            <Gap Height={22} />
                            <Inputan label="Password baru" height={38} secureTextEntry />
                            <Gap Height={22} />
                            <Inputan label="Konfirmasi Password" height={38} secureTextEntry />
                            <Gap Height={22} />
                        </View>
                        <Gap Height={22} />
                        <View style={{ marginHorizontal: 15 }}>
                            <Button Title="Kirim" type="Secondary" />
                            <Gap Height={22} />
                        </View>
                        
                    </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    pages: {
        flex: 1
    },
    container: {
        marginBottom: 22,

    },
    fromInputdata: {
        marginTop: 15,
        marginHorizontal: 15,
    },
    formAction:{
        justifyContent:'space-between',
        flex: 1
    }
})
