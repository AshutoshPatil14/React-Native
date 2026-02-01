import { Alert, Button, Image, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
  return (
    <SafeAreaView>
      <Image style={{width: 400, height: 100, margin: 20, alignSelf: 'center', backgroundColor:'red'}}
       source={{uri:"https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/company/1/applications/645a057875d8c4882b096f7e/application/pictures/free-logo/original/OhLa8p_da-Reliance-Digital.webp"}}/>
      <Text style={{ color: 'black', fontSize: 24, alignSelf: 'center' }}>Welcome to the store!</Text>
      <Button title="Click Here" onPress={() => Alert.alert('Clicked')}></Button>
    </SafeAreaView>
  )
}

export default App