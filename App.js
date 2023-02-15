import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import Logo from './assets/adaptive-icon.png'


export default function App() {
 
  const [adultos,setAdultos]=useState("")
  const [crianca,setCrianca]=useState("")
  const [tempo,setTempo]=useState("")


  return (
    <View style={styles.container}>
      <View style={styles.second}>
      <Image
        style={styles.logo}
        source={Logo}
        
      />
      </View>
      <Text style={styles.nome}>Churrascometro</Text>
      
      <Text style={styles.txt}>Quantidade de Adultos</Text>
        <TextInput 
        style={styles.inputext} 
        placeholder="Quantidade de Adultos" 
        keyboardType='numeric'
        value={adultos}
        onChangeText={text=>setAdultos(text)}
        ></TextInput>

      <Text style={styles.txt}>Quantidade de Crianças</Text>
      
      <TextInput style={styles.inputext} 
      placeholder="Quantidade de Crianças" 
      keyboardType='numeric'
      value={crianca}
      onChangeText={text=>setCrianca(text)}
      ></TextInput>
      
      
      <Text style={styles.txt}>Tempo de Festa</Text>
      <TextInput style={styles.inputext}
      placeholder="Tempo de Festa" 
      keyboardType='numeric'
      value={tempo}
      onChangeText={text=>setTempo(text)}
      ></TextInput>
      
      <Button color="red" 
              
        title="Calcular"
        onPress={() => Alert.alert("Teste",tempo)}
      />
      <StatusBar style="auto" />
    </View>
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'red',
    fontSize:35,
    textAlign:'center',
    marginBottom:30,
  },
  
logo:{
height:150,
width:150,
},

second:{
backgroundColor:'white',
width:500,
height:150,
alignItems:'center',
marginBottom:30,
borderColor:'red',
},

txt:{
  color:'white',
  marginBottom:10,
},

  nome:{
    color:'white',
    fontSize:25,
    marginBottom:30,
  },


  inputext:{
    backgroundColor:'white',
    
    width:200,
    textAlign:'center',
    fontSize:15,
    marginBottom:30,
  
  },

  botao:{
    marginTop:40,
  }
});