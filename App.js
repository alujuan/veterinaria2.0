import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <View style={styles.logo}>
        <Text style={{ fontSize: 40}}>Veterinaria</Text>
        < Image style={styles.perfil_foto} source={{}} />
      </View>
      <TextInput style={styles.textimput_cadastrologin}/>
      <TextInput style={styles.textimput_cadastrosenha}/>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 40}}>Veterinaria</Text>
        < Image style={styles.perfil_foto} source={{}} />
      </View>
      < Image style={{ resizeMode: "stretch", height: 200, width: "90%", margin: 10}}
       source={require('./img/img1.jpeg')} 
      />
        <Button
          title="Saida"
          onPress={() => navigation.navigate('Tratamento')}
        />
        <Button
          title="Calendario"
          onPress={() => navigation.navigate('Calendario')}
        />
    </View>
    
  );
}
function TratamentoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 40}}>Veterinaria</Text>
        < Image style={styles.perfil_foto} source={{}} />
      </View>
      <View style={{ backgroundColor: "#eoDFC4", borderRadius: 20, borderColor: "33332E", alignItems: 'Center' }}>
        <Text style={{ fontSize: 20}}>Status: Em Tratamento  </Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}
function CalendarioScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 40}}>Veterinaria</Text>
        < Image style={styles.perfil_foto} source={{}} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Tratamento" component={TratamentoScreen} options={{ title: 'Tratamento' }} />
        <Stack.Screen name="Calendario" component={CalendarioScreen} options={{ title: 'Calendario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textimput_cadastrologin: {
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 25,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  textimput_cadastrosenha: {
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 25,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  logo:{
    margin: 15,
  }
});
