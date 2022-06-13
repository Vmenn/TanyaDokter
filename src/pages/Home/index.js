import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dokter1, DokterAnak, DokterGigi, DokterJantung, DokterMata, DokterUmum, IconProfile, LebihDari } from '../../assets'
import { Gap, Header, ListCategory, ListNews, ListTopDokter, } from '../../components'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { Dimensions } from 'react-native';
import { DummyCategory, DummyNews, DummyTopDokter } from '../../data'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils/constant'

export default class Home extends Component {
    onNews = () => {
        this.props.navigation.navigate('News');
    };

    onCategory = () => {
        this.props.navigation.navigate('Category');
    };
    
    onProfile = () => {
        this.props.navigation.navigate('Profile');
    };

    onDetailDokter = () => {
        this.props.navigation.navigate('DetailDokter');
    };
    constructor(props) {
        super(props)

        this.state = {
            Categorys:DummyCategory,
            TopDokter:DummyTopDokter,
            News:DummyNews,
        }
    }
    render() {
        const {Categorys,TopDokter,News} = this.state
        return (
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View style={styles.header} >
                    <Header navigation={this.onProfile}/>
                </View>
                {/* Header End */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap Height={14} />
                    {/* Category */}
                    <View style={styles.doktercategory}>
                        <View style={styles.judul}>
                            <Text style={styles.categorytitle} >Dokter Category</Text>
                        </View>
                        <ListCategory Categorys={Categorys}/>
                    </View>
                    {/* Category End */}
                    <Gap Height={14} />
                    {/* Berita */}
                    <View style={styles.news}>
                        <View style={styles.judul}>
                            <Text style={styles.categorytitle}>News</Text>
                            <View style={styles.panah} >
                                <Text style={styles.lainnya} onPress={this.onNews}>Lihat lainnya </Text>
                                <LebihDari onPress={this.onNews}/>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ListNews News={News} />
                        </ScrollView>
                    </View>
                    {/* Berita End */}
                    <Gap Height={14} />
                    {/* DokterTop */}
                <View style={styles.TopDokter}>
                    <Text style={styles.titledokter} onPress={this.onDetailDokter} >Top Dokter</Text>

                    <ListTopDokter TopDokter={TopDokter}/>
                </View>
                    {/* DokterTop End */}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 15,
        backgroundColor: 'white',
        flex: 1
    },
    judul: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center'
    },
    header: {
        backgroundColor: Colors.Primary,
        height: responsiveHeight(90)
    },
    categorytitle: {
        color: Colors.Black,
        fontSize: RFValue(20,heightMobileUI),
        fontFamily: fonts.primary.Medium

    },
    lainnya: {
        color: Colors.Grey,
        fontSize: RFValue(12,heightMobileUI),
        fontFamily: fonts.primary.Medium,
        alignItems:'center',
        marginRight:8

    },
    newscontent: {
        // backgroundColor:Colors.Black,
        flex: 1
    },

    photo: {
        width: responsiveWidth(65),
        height:responsiveHeight(65),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topdoktitle: {
        color: Colors.Black,
        fontFamily: fonts.primary.Medium,
        fontSize: RFValue(18,heightMobileUI)
    },
    TopDokter:{
        marginHorizontal:15
    },
    titledokter:{
        fontFamily:fonts.primary.Medium,
        color:Colors.Black,
        fontSize:RFValue(18,heightMobileUI),
        marginBottom:14
    },
    panah:{
        flexDirection:'row',
        alignItems:"center"
    }
})
