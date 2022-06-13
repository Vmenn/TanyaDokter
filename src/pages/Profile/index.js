import { StyleSheet, View, Image,TouchableOpacity,Text} from 'react-native'
import React,{ Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderComponent, ListMenu } from '../../components'
import { Colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { Check, Dokter1, Gembok, Notif, Setting, SignOut } from '../../assets'
import { Avatar } from 'react-native-paper'
import { DummyMenu, DummyProfile } from '../../data'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant'

export default class Profile extends Component {

  constructor(props) {
      super(props)

      this.state = {
          profile: DummyProfile,
          MenuProfile: DummyMenu
      }
  }

  onBack = ()=>{
    this.props.navigation.goBack()
  }
  render() {
      const {profile,MenuProfile,} = this.state
      return (
        <SafeAreaView style={styles.container}>
        <HeaderComponent Title='Profile' onPress={this.onBack}/>
        <View style={styles.userInfoSection}>
          <View style={styles.profile}>
            <Avatar.Image
              source={profile.gambar}
              size={100}
              backgroundColor='rgba(52, 52, 52, 0.8)'
            />
            <View style={styles.profileInformation}>
              <Text style={styles.title}>{profile.nama}</Text>
              <Text style={styles.caption}>{profile.email}</Text>
            </View>
          </View>
        </View>

        <ListMenu MenuProfile={MenuProfile} />
        
      </SafeAreaView>

      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile:{
    marginTop:24,
    alignItems:'center',
    justifyContent:'center'
  },
  userInfoSection: {
    height:responsiveHeight(223),
    backgroundColor:Colors.Primary,
    borderBottomLeftRadius:32,

    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
  },
  profileInformation:{
    alignItems:'center'
  },
  title: {
    fontSize: RFValue(18,heightMobileUI),
    fontWeight:fonts.primary.Medium,
    marginTop:12,
    marginBottom: 5,
    color:Colors.Black
  },
  caption: {
    fontSize: RFValue(14, heightMobileUI),
    lineHeight: 14,
    fontWeight:fonts.primary.Light,
    color:Colors.White
  },
  
})