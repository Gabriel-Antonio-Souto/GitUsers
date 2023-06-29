import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Css from '../css.js';

export default function Not_found({ navigation }) {
  return (
    <View style={Css.container}>

      <Text style={Css.not_found}>404</Text>

      <Text style={Css.text}>Usuário não encontrado</Text>

      <TouchableOpacity style={Css.busca} 
      onPress={() => navigation.navigate('Home')}>
       <Text style={Css.buscaTexto}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}
