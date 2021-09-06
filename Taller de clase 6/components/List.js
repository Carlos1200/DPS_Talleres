import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'


export const Lista=({lista,eliminar})=>{
  const {nombre, edad, carrera, id} = lista;
  return(
    <View style={styles.contenerdor} >
      <View style={styles.header}>
        <Text  style={styles.text}>Nombre: {nombre}</Text>
        <Text style={styles.text}>edad: {edad}</Text>
      </View>
      <Text style={styles.text}>Carrera: {carrera}</Text>

      <Button
        color='red'
        style={styles.textoEliminar}
        title="Eliminar"
        onPress={()=>eliminar(id)}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  contenerdor:{
    backgroundColor:'gray',
    borderRadius:20,
    padding:30,
    marginVertical:10
  },
  text:{
    color:'#FFFFFF'
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
})