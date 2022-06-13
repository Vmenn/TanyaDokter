import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { LogoSplash } from '../../assets'
import { useEffect } from 'react/cjs/react.development'


const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Tutorial')
        }, 2000)
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <LogoSplash/>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00AFC1',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})