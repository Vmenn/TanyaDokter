import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../../utils'

const Inputan = ({ place, aktif, textarea,width,height,label,fontSize,value,secureTextEntry }) => {
    if (textarea) {
        return (
            <View>
                <Text style={styles.label(fontSize)}>{label}</Text>
                <TextInput value={value} placeholder={place} style={styles.inputTextArea(fontSize)} multiline={true} numberOfLines={4}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
           <Text style={styles.label(fontSize)}>{label}</Text>
            <TextInput value={value} secureTextEntry={secureTextEntry} placeholder={place} style={styles.input(width,height,fontSize) }/>
        </View>
    )
}

export default Inputan

const styles = StyleSheet.create({
    // container: {
    //     borderBottomWidth: 2,
    //     borderColor: Colors.White,
    // },
    label:(fontSize)=>({
        fontSize: fontSize ? fontSize:16,
        fontFamily:fonts.primary.Medium,
        color:Colors.Black
    }),
    input:(width,height,fontSize)=>({
        fontSize: fontSize ? fontSize:16,
        fontFamily:fonts.primary.Medium,
        width:width,
        height:height,
        borderRadius:5,
        borderColor:Colors.Grey,
        borderBottomWidth:1,
        flex:1,
        textAlign:'justify'
        // backgroundColor:Colors.Grey
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