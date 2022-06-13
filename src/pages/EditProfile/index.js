import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Header, HeaderComponent, Gap } from '../../components'
import { Colors, responsiveHeight, responsiveWidth, fonts} from '../../utils'
import { Camera } from '../../assets'
import { TextInput } from 'react-native-paper'

const EditProfile = () => {
    return (
        <View>
            <HeaderComponent Title="EditProfile" />
            <View style={styles.userInfoSection}>
                <View style={{ alignItems: 'center',justifyContent:'center' }}>
                    <Gap Height={24} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
                        <View style={styles.Takeimage}>
                            <ImageBackground source={require('../../assets/image/Dokter1.png')}
                                style={{
                                    height: responsiveHeight(100),
                                    width: responsiveWidth(100)
                                }}
                                imageStyle={{ borderRadius: 8 }}>
                                <View style={styles.cameraIcon}>
                                    <Camera style={styles.icon} />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>Muhamad Firmansyah</Text>
                </View>
            </View>
            <View style={styles.action}>
                <TextInput
                placeholder='First Name'
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={styles.textInput}
                />
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    Takeimage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        backgroundColor: 'black',
        borderRadius: 8
    },
    cameraIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfoSection: {
        height: responsiveHeight(223),
        backgroundColor: Colors.Primary,
        borderBottomLeftRadius: 32,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title: {
        fontSize: 18,
        marginTop: 12,
        marginBottom: 5,
        color: Colors.Black,
        fontFamily:fonts.primary.Medium
    },
})
