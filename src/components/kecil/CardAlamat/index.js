import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors, fonts } from '../../../utils'
import { RFValue } from 'react-native-responsive-fontsize'
import { heightMobileUI } from '../../../utils/constant'
import Gap from '../Gap'
const CardAlamat = ({ profile }) => {
  return (
    <View style={styles.information}>
      <View style={styles.alamat}>
        <View style={styles.Textcardalamat}>
          <Text style={styles.alamatPengiriman}>Alamat Pengriman</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.pilihAlamat}>Pilih alamat lain</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardalamat}>
        <Gap Height={6} />
        <Text style={styles.textAlamat}>{profile.nama}</Text>
        <Text style={styles.namaHp}>{profile.nama} ({profile.noHp})</Text>
        <Text style={styles.kota}>{profile.kota}</Text>
        <Text style={styles.AlamatLengkap}>{profile.alamat_lengkap}</Text>
      </View>

    </View>
  )
}

export default CardAlamat

const styles = StyleSheet.create({
  information: {
    backgroundColor: Colors.White,
    // marginHorizontal:15,

  }, cardalamat: {
    marginHorizontal: 15,
    paddingBottom: 8
  },
  textAlamat: {
    fontSize: RFValue(16, heightMobileUI),
    fontFamily: fonts.primary.Medium,
    color: Colors.Black,
  },
  namaHp: {
    fontSize: 12,
    fontFamily: fonts.primary.Reguler,
    color: Colors.Grey,
    marginTop: 4
  },
  AlamatLengkap: {
    fontSize: 12,
    fontFamily: fonts.primary.Reguler,
    color: Colors.Grey,
    textAlign: 'justify',
    lineHeight: 14
  },
  kota: {
    fontSize: 12,
    fontFamily: fonts.primary.Reguler,
    color: Colors.Grey,
    textAlign: 'justify',
    marginTop: 6,
    lineHeight: 14
  },
  alamat: {
    borderBottomWidth: 1,
    borderColor: Colors.Grey,
    paddingVertical: 8,
    backgroundColor: Colors.White,
},
Textcardalamat: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 15,
},

alamatPengiriman: {
  fontSize: 14,
  fontFamily: fonts.primary.Medium,
  color: Colors.Black
},
pilihAlamat: {
  fontSize: 14,
  fontFamily: fonts.primary.Medium,
  color: Colors.FontsThree
},
})