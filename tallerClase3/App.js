import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient  colors={['#1f3b08', 'black']}
    style={styles.linearGradient}>
    <View style={styles.container}>
      <Image source={{
        uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.736xw:0.493xh;0.262xw,0.0238xh&resize=480:*"}}
          style={styles.imagen}
        />
        <Text style={styles.nombre}>Carlos David Herrera Guardado</Text>
        <View style={styles.SubContainer}>
          <Text style={styles.subTitulo}>Hobbies:</Text>
          <Text style={styles.text}>Programar</Text>
          <Text style={styles.text}>Jugar Video Juegos</Text>
          <Text style={styles.text}>Jugar con mis perros</Text>
        </View>
        <View style={styles.SubContainer}>
          <Text style={styles.subTitulo2}>Lenguaje de Programación favorito:</Text>
          <Image
            source={{
              uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
            }}
            style={{...styles.imagen,borderRadius:50,alignSelf:'center'}}
          />
          <Text style={{...styles.text,alignSelf:'center',marginTop:15,color:'white'}}>TypeScript</Text>
        </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:60
  },
  text:{
    color: 'white',
    fontSize:15
  },
  imagen:{
    width: 200,
    height: 200,
    borderRadius:100
  },
  nombre:{
    fontSize:20,
    fontWeight:'bold',
    color: 'white'
  },
  SubContainer:{
    marginHorizontal:30,
    marginTop:30,
    marginLeft:-120
  },
  subTitulo:{
    fontSize:17,
    fontWeight:'bold',
    marginBottom:10,
    color: 'white',
  },
  subTitulo2:{
    fontSize:17,
    fontWeight:'bold',
    marginBottom:10,
    color: 'white',
    marginLeft:150
  }
});
