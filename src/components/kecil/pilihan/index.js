import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, responsiveHeight} from '../../../utils';

const Pilihan = ({label, datas, width, height, fontSize}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <View style={styles.wrapperPicker}>
        
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: (fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    // fontFamily: Fonts.primary.regular,
  }),
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    // fontFamily: Fonts.primary.regular,
    width: width,
    height: height ? height : responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10
  }),
  wrapperPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Grey,
  }
});
