import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Css from '../css.js';

export default function User_git({navigation,route}) {
 
  const [user, setUser] = useState(route.params?.user);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/"+user)
      .then((resposta) => resposta.json())
      .then((json) => setDados(json))
      .catch(() => alert('erro ao carregar usuário'))
  },[]);

  if(dados.message){
    navigation.navigate('Not_found');
  }else{
    console.log(dados);
  }
  
  return (
    <View style={Css.container}>

        <View style={Css.image_user_view}>    
          <Image
            style={Css.image_user}
            source={{
              uri: dados.avatar_url,
            }}
          />
        </View>
    
        <View style={Css.card}>
          <Text style={Css.name}>{dados.name}</Text>
          <Text style={Css.login}>@{dados.login}</Text>
        </View>
    
        <View style={Css.card}>
          <Text style={Css.bio}>{dados.bio}</Text>
        </View>
      
        <View style={Css.card}>
          <Text style={Css.texts}>Repositórios Públicos: {dados.public_repos}</Text>
          <Text style={Css.texts}>Seguidores: {dados.followers}</Text>
          <Text style={Css.texts}>Seguindo: {dados.following}</Text>
        </View>
    
        <TouchableOpacity style={Css.busca} 
        onPress={() => navigation.navigate('Home')}>
          <Text style={Css.buscaTexto}>Voltar</Text>
        </TouchableOpacity>

    </View>      
  );
}

