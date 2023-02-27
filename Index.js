import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import Logo from './assets/adaptive-icon.png'


export default function App() {
 
  const [adultos,setAdultos]=useState("")
  const [crianca,setCrianca]=useState("")
  


const [totalCarne,setMeatAmount]=useState("")
  const [totalCerveja,setCerveja]=useState("")
  const [totalRefri,setRefri]=useState("")

const calcularChurrasco = () => {
    const kilogramsPerPerson = 0.500;
    const totalCarneAdulto = adultos * kilogramsPerPerson;
    const totalCarneCrianca = crianca * kilogramsPerPerson
    const totalCarne = totalCarneAdulto + totalCarneCrianca;
    const totalCerveja=adultos*1.5;
    const totalRefri = crianca *1.5;
   
    setMeatAmount(totalCarne);
    setCerveja(totalCerveja);
    setRefri(totalRefri);

    

    }

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
      
          
      
      <Button color="red" 
              
        title="Calcular"
        onPress={calcularChurrasco}
      />

       <Text style={styles.resultado}>Quantidade de carne necessária: {totalCarne} kg</Text>
       <Text style={styles.resultado}>Quantidade de cerveja necessária: {totalCerveja} Litros </Text>
       <Text style={styles.resultado}>Quantidade de refrigerante necessário: {totalRefri} Litros </Text>

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

  resultado:{
    color:'white',
    fontSize:15,
    
    marginTop:30,
  },

  nome:{
    color:'white',
    fontSize:35,
    marginBottom:10,
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
    marginBottom:40,
  }
});