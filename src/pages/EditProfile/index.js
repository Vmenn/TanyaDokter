import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { Header, HeaderComponent, Gap, Inputan, Tombol, Button } from '../../components'
import { Colors, responsiveHeight, responsiveWidth, fonts } from '../../utils'
import { Camera } from '../../assets'
import { TextInput } from 'react-native-paper'
import React, { Component } from 'react'
import { DummyProfile } from '../../data'
import Pilihan from '../../components/kecil/pilihan'
export default class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataProvinsi: [],
            dataKota: [],
            profile: DummyProfile
        }
    }

    render() {
        const {dataProvinsi,dataKota,profile} = this.state
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <HeaderComponent Title="EditProfile" onPress={()=>this.props.navigation.goBack()}/>
                <View style={styles.userInfoSection}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Gap Height={24} />
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
                            <View style={styles.Takeimage}>
                                <ImageBackground source={profile.gambar}
                                    style={{
                                        height: responsiveHeight(100),
                                        width: responsiveWidth(100)
                                    }}
                                    imageStyle={{ borderRadius: 50 }}>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.title}>Muhamad Firmansyah</Text>
                    </View>                   
                </View>
                <View style={styles.fromInputdata}>
                        <Inputan label="Full Name"height={38} value={profile.nama}/>
                        <Gap Height={22}/>
                        <Inputan label="Email"height={38}  value={profile.email}/>
                        <Gap Height={22}/>
                        <Inputan label="No Handphone"height={38}  value={profile.noHp}/>
                        <Gap Height={22}/>
                        <Inputan place="Alamat" height={38} textarea  value={profile.alamat_lengkap}/>
                        <Gap Height={22}/>
                        <Pilihan label="Kota" datas={dataKota}/>
                        <Gap Height={22}/>
                        <Pilihan label="Provinsi" datas={dataProvinsi}/>
                        <Gap Height={22}/>
                    </View>

                    <View style={{marginHorizontal:15}}>
                        <Button Title="Kirim" type="Secondary"/>
                    </View>
                    <Gap Height={22}/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        marginBottom:22
    },
    Takeimage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(110),
        width: responsiveWidth(110),
        backgroundColor: Colors.White,
        borderRadius: 50
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
        color: Colors.White,
        fontFamily: fonts.primary.Medium
    },
    fromInputdata:{
        marginTop:15,
        marginHorizontal:15,
    }
})
