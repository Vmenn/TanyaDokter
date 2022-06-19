import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../../utils'

const Inputan = ({ place, aktif, textarea,width,height,label,fontSize,value,secureTextEntry,type,placeColor,keyboardType}) => {
    if (textarea) {
        return (
            <View>
                <Text style={styles.label(fontSize,type)}>{label}</Text>
                <TextInput value={value} placeholder={place} placeholderTextColor={placeColor} style={styles.inputTextArea(fontSize)} multiline={true} numberOfLines={4}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
           <Text style={styles.label(fontSize,type)}>{label}</Text>
            <TextInput keyboardType={keyboardType}  value={value} secureTextEntry={secureTextEntry} placeholder={place} placeholderTextColor={placeColor} style={styles.input(width,height,fontSize,type) }/>
        </View>
    )
}

export default Inputan

const styles = StyleSheet.create({
    container: {
    },
    label:(fontSize,type)=>({
        fontSize: fontSize ? fontSize:16,
        fontFamily:fonts.primary.Medium,
        color:type === 'Secondary' ? 'white' : 'black',
    }),
    input:(width,height,fontSize,type)=>({
        fontSize: fontSize ? fontSize:16,
        fontFamily:fonts.primary.Medium,
        width:width,
        height:height,
        borderRadius:5,
        borderColor: type === 'Secondary' ? 'white' : 'black',
        borderBottomWidth:1,
        textAlign:'justify'
    }),
    inputTextArea:(fontSize)=>({
        fontSize: fontSize ? fontSize:16,
        fontFamily:fonts.primary.Medium,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#C4C4C4",
        textAlignVertical:'top'
    }),
})