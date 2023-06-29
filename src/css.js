import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#1b1f23',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  image_user: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#6a6966',
  },
  not_found:{
    fontSize: 70,
    margin: 10,
    color: 'white',
  },
  input:{
      backgroundColor: '#161b22',
      height: 50,
      margin: 12,
      borderWidth: 1,
      borderColor: '#6a6966',
      borderRadius: 50,
      color:'white',
      padding: 15,
      width: '90%',
      fontFamily:'Arial',
  },
  card:{
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#6a6966',
    borderRadius: 10,
    width: '90%',
    fontFamily:'Arial',
    padding: 15,
    marginTop: 10,
  },
  text:{
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
  busca:{
    backgroundColor: '#21262d',
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: '#6a6966',
    borderRadius: 50,
    padding: 15,
    width: '90%',
    fontFamily:'Arial',
  },
  buscaTexto:{
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
  },
  name:{
    color: 'white',
    fontSize: 15,
    margin: 5,
  },
  texts:{
    color: 'white',
    fontSize: 15,
    margin: 5,
  },
  bio:{
    color: 'white',
    fontSize: 15,
    margin: 5,
  },
  login:{
    color: '#2a81e9',
    fontSize: 15,
    margin: 5,
  },
  image_user_view:{
    alignItems: 'center',
  },
});