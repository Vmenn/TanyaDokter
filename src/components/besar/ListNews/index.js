import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Colors, responsiveHeight, responsiveWidth,fonts } from '../../../utils'
import { CardNews } from '../../kecil'

const ListNews = ({News}) => {
    return (
        <View style={styles.conatiner}>
            {News.map((New) =>{
                return(
                    <CardNews New={New} key={New.id} />
                )
            })}
        </View>
        
    )
}

export default ListNews

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
})