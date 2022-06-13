import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Chat, ChatActive, Home, HomeActive, Hostpital, HostpitalActive, Obat, ObatAktif } from '../../../assets'

const TabItem = ({index,isFocused,options,onLongPress,onPress,label}) => {
    
    const Icon =()=>{
        if (label==="Home") {
            return isFocused ? <HomeActive/> : <Home/>
        }

        if (label==="Chat") {
            return isFocused ? <ChatActive/> : <Chat/>
        }

        if (label==="Hospital") {
            return isFocused ? <HostpitalActive/> : <Hostpital/>
        }

        if (label==="Obat") {
            return isFocused ? <ObatAktif/> : <Obat/>
        }
        return <Home/>
    }
    
    return (

        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
                <Icon/>
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    text:(isFocused)=>({
    color:isFocused? '#FFD124' : '#FFFFFF',
    fontSize:12,
    marginTop:2
    })
    ,
    container:{
        alignItems:'center',
        flex:1
    }
})