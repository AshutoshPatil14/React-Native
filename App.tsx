import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/company/1/applications/645a057875d8c4882b096f7e/application/pictures/free-logo/original/OhLa8p_da-Reliance-Digital.webp',
        }}
      />
      <Text style={{ color: 'black', fontSize: 24, alignSelf: 'center' }}>
        Welcome to the store!
      </Text>
      <Button
        title="This is a Button"
        onPress={() => Alert.alert('You clicked the button!')}
      ></Button>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => alert('You clicked on a TouchableOpacity')}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          This is a TouchableOpacity
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.touchableHighlight}
        onPress={() => alert('You clicked on a TouchableHighlight')}
      >
        <Text>This is a TouchableHighlight</Text>
      </TouchableHighlight>
      <Pressable
        style={styles.pressable}
        onPress={() => Alert.alert('You clicked on a Pressable')}
      >
        <Text>This is a Pressable</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    gap: 10,
  },
  img: {
    width: 400,
    height: 100,
    margin: 20,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  touchableOpacity: { padding: 10, margin: 10, backgroundColor: 'darkred' },
  touchableHighlight: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgreen',
  },
  pressable: { backgroundColor: 'lightblue' },
});
