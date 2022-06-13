import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../utils'
import { Logo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Register = ({ navigation }) => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.page}>
                    <Gap Height={22} />
                    <View style={styles.header}>
                        <Logo />
                        <Gap Height={18} />
                        <Text style={styles.title}>Daftar</Text>
                    </View>
                    <Gap Height={74} />
                    <Input place="Full Name" />
                    <Gap Height={35} />
                    <Input place="Email" />
                    <Gap Height={35} />
                    <Input place="No Hp" />
                    <Gap Height={35} />
                    <Input place="Password" />
                    <Gap Height={35} />
                    <Input place="Confirm Password" />
                    <Gap Height={22} />
                    <Button Title="Daftar" onPress={() => navigation.replace("MainApp")}/>
                    <Gap Height={22} />
                    <Link title="Sudah Punya Account?" links="Masuk" onPress={() => navigation.navigate("Login")} />
                    <Gap Height={22} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Register

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