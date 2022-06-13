import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
const Tutorial = ({ navigation }) => {


    const onDone = () => {
        navigation.replace('Login')
    }

    const onSkip = () => {
        navigation.replace('Login')
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
            }}>

                <Image style={{ marginTop: 36 }} source={item.logo} />

                <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', marginTop: 16 }}>
                    {item.title}
                </Text>

                <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', textAlign: 'center', marginTop: 2,marginBottom:12 }}>
                    {item.text}
                </Text>

                <Image style={styles.introImageStyle} source={item.image} />

            </View>
        )
    }
    return (
        <>
            {(
                <AppIntroSlider
                    data={slides}
                    renderItem={renderItem}
                    onDone={onDone}
                    onSkip={onSkip}
                    showSkipButton={true}
                    // renderNextButton={renderNextButton}
                    dotStyle={{ backgroundColor: '#CECECE', marginLeft: -3 }}
                    activeDotStyle={{ width: 20, backgroundColor: '#FFFFFF', marginLeft: -3 }}
                />
            )
            }
        </>
    );
};

export default Tutorial;

const styles = StyleSheet.create({
    // 
    buttonCircle: {
        width: 40,
        height: 40,
        color: "#EE303F",
        justifyContent: 'center',
        alignItems: 'center',
    },

});

const slides = [
    {
        key: 'one',
        logo: require('../../assets/icon/LogoPNG.png'),
        title: 'Cari Dokter',
        text: 'Cari dokter spesialis ? sekarang lebih mudah dengan aplikasi tanya Dokter',
        image: require('../../assets/illustrasi/DokterPNG.png'),
        backgroundColor: '#00AFC1',
    },
    {
        key: 'two',
        logo: require('../../assets/icon/LogoPNG.png'),
        title: 'Konsultasi',
        text: 'Apa yang kamu rasakan ? kami akan membantu dan memberikan pelayan terbaik',
        image: require('../../assets/illustrasi/SusterPNG.png'),
        backgroundColor: '#00AFC1',
    },
];