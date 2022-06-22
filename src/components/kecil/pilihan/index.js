import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, fonts, responsiveHeight} from '../../../utils';
import { Picker } from '@react-native-picker/picker';

const Pilihan = ({label, datas, width, height, fontSize,type}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize,type)}>{label} </Text>
      <View style={styles.wrapperPicker(type)}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker(width, height, fontSize)}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          <Picker.Item label="Pilih" value="" />
          {datas.map((item, index) => {
            if(label== "Provinsi"){
              return <Picker.Item label={item.province} value={item.province_id} key={item.province_id} />
            }
              return <Picker.Item label={item} value={item} key={index} />
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Pilihan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: (fontSize,type) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.Reguler,
    color: type === 'Secondary' ? 'white':'black'
  }),
  picker: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.Reguler,
    width: width,
    height: height ? height : responsiveHeight(46),
    marginTop: -10,
    marginBottom: 10
  }),
  wrapperPicker:(type)=>({
    borderWidth: 1,
    borderRadius: 5,
    borderColor: type === 'Secondary' ? 'white':'black',
  }) 
});
