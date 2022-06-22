import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Colors, fonts } from '../../utils'
import { Logo } from '../../assets'
import { Button, Gap, Input, Inputan, Link } from '../../components'
import React, { Component } from 'react'
import Pilihan from '../../components/kecil/pilihan'
import {connect}from 'react-redux'
import {getProvinsiList} from '../../actions/RajaOngkirAction'

class Register2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataProvinsi: [],
            dataKota: [],
        }
    }

    componentDidMount(){
        this.props.dispatch(getProvinsiList())
    }
    render() {
        // console.log("Data provinsi:" , this.props.getProvinsiResult);
        const {dataProvinsi,dataKota,profile} = this.state
        const {getProvinsiResult,} = this.props
        return (
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                    <View style={styles.page}>
                        <Gap Height={22} />
                        <View style={styles.header}>
                            <Logo />
                            <Gap Height={18} />
                            <Text style={styles.title}>Daftar</Text>
                        </View>
                        <View style={styles.FormLogin}>
                        <Inputan textarea label="Alamat"  type="Secondary" placeColor="white"/>
                        <Inputan textarea label="Alamat Lengkap"  type="Secondary" placeColor="white"/>
                        <Pilihan label="Kota" datas={dataKota} type="Secondary"/>
                        <Pilihan label="Provinsi" datas={getProvinsiResult ? getProvinsiResult:[]} type="Secondary"/>
                        <Gap Height={22} />
                        <Button Title="Continue" onPress={()=>this.props.navigation.navigate('MainApp')} />
                        <Gap Height={22} />
                        <Link title="Sudah Punya Account?" links="Login" onPress={()=>this.props.navigation.navigate('Login')} />
                        </View>
                    </View>
                    </ScrollView>
                </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state)=>({
    getProvinsiResult: state.RajaOngkirReducer.getProvinsiResult
})
export default connect(mapStatetoProps,null)(Register2)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary,
        justifyContent: 'center',
    },
    page: {
        marginHorizontal: 15
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.primary.Bold,
        fontSize: 20,
        color: Colors.White,
    }
})