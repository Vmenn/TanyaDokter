import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { fonts,Colors } from '../../../utils'
import { CardMenu } from '../../kecil'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'
const ListMenu = ({MenuProfile,navigation}) => {
    return (
        <View style={styles.menuWrapper}>
            <Text style={styles.general}>General</Text>
            {MenuProfile.map((Profile) =>{
                return(
                    <CardMenu Profile={Profile} key={Profile.id} navigation={navigation}/>
                    // <Text>asdasd</Text>
                )
            })}
        </View>
    )
}

export default ListMenu

const styles = StyleSheet.create({
    menuWrapper: {
        marginHorizontal: 15,
        marginTop: 24
    },
    general: {
        fontFamily: fonts.primary.Medium,
        fontSize: RFValue(18,heightMobileUI),
        color: Colors.Black,
    }
})