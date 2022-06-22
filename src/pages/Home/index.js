import { Text, StyleSheet, View, ScrollView, } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LebihDari } from '../../assets'
import { Gap, Header, ListCategory, ListNews, ListTopDokter, } from '../../components'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { DummyCategory, DummyNews, DummyTopDokter } from '../../data'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../utils/constant'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Categorys:DummyCategory,
            TopDokter:DummyTopDokter,
            News:DummyNews,
        }
    }
    // componentDidMount(){
    //     this.props.getUser();
    // }
    render() {
        const {Categorys,TopDokter,News} = this.state
        const {navigation, } = this.props
        return (
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View style={styles.header} >
                    <Header onPress={()=>this.props.navigation.navigate('Profile')}/>
                </View>
                {/* Header End */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap Height={14} />
                    {/* Category */}
                    <View style={styles.doktercategory}>
                        <View style={styles.judul}>
                            <Text style={styles.categorytitle} >Dokter Category</Text>
                        </View>
                        <ListCategory Categorys={Categorys} navigation={navigation}/>
                    </View>
                    {/* Category End */}
                    <Gap Height={14} />
                    {/* Berita */}
                    <View style={styles.news}>
                        <View style={styles.judul}>
                            <Text style={styles.categorytitle}>News</Text>
                            <View style={styles.panah} >
                                <Text style={styles.lainnya} onPress={()=>this.props.navigation.navigate('News')}>Lihat lainnya </Text>
                                <LebihDari onPress={()=>this.props.navigation.navigate('News')}/>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ListNews News={News} navigation={navigation}/>
                        </ScrollView>
                    </View>
                    {/* Berita End */}
                    <Gap Height={14} />
                    {/* DokterTop */}
                <View style={styles.TopDokter}>
                    <Text style={styles.titledokter}>Top Dokter</Text>

                    <ListTopDokter TopDokter={TopDokter} navigation={navigation}/>
                </View>
                    {/* DokterTop End */}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

// const mapStatetoProps = (state)=>({
//     dataUser: state.UserReducer.dataUser
// })

export default Home

// connect(mapStatetoProps,{getUser})( ) 

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
