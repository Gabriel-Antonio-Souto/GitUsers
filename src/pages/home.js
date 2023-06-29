import React, {useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Css from '../css.js';

export default function Home({ navigation }) {
  
  const [user, setUser] = useState('');

  return (
    <View style={Css.container}>

      <Image
        style={Css.image}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__480.png',
        }}
      />
      
      <Text style={Css.text}>GitHub Users</Text>

      <TextInput style={Css.input}
        placeholderTextColor="white"
        placeholder="@Usuário"
        onChangeText={setUser}
      />

      <TouchableOpacity style={Css.busca} 
      onPress={() => navigation.navigate('User_git',{user:user})}>
       <Text style={Css.buscaTexto}>Buscar</Text>
      </TouchableOpacity>

    </View>
  );
}
