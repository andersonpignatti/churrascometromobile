import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import Logo from './assets/adaptive-icon.png'


export default function Calcular() {

<view>
<Text style={styles.resultado}>Quantidade de carne necessária: {totalCarne} kg</Text>
       <Text style={styles.resultado}>Quantidade de cerveja necessária: {totalCerveja} Litros </Text>
       <Text style={styles.resultado}>Quantidade de refrigerante necessário: {totalRefri} Litros </Text>

       </view>

}