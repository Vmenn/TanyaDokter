import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../utils'
import { Logo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <View style={styles.header}>
                    <Logo/>
                    <Gap Height={18}/>
                    <Text style={styles.title}>Masuk</Text>
                </View>
                <Gap Height={74}/>
                <Input  place="Masukan email"/>
                <Gap Height={35}/>
                <Input  place="Password" />
                <Gap Height={22}/>
                <Link title="Lupa Password ?" posisi="tengah"/>
                <Gap Height={22}/>
                <Button Title="Masuk" />
                <Gap Height={22}/>
                <Link title="Tidak Punya Account?" links="Daftar" onPress={() => navigation.replace("Register")}/>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary,
        justifyContent:'center',
    },
    page: {
        marginHorizontal: 15
    },
    header:{
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:fonts.primary.Bold,
        fontSize:20,
        color:Colors.White,
    }
})