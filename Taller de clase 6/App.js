import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import shortid from 'shortid';
import { Lista } from './components/List';

export default function App() {
  const [inputTexto, guardarInputTexto] = useState({
    nombre: '',
    edad: '',
    carrera: '',
  });
  const [lista, guardarlista] = useState([]);
  useEffect(() => {
    obtenerDatosStorage();
  }, []);
  const guardarDato = async () => {
    try {
      inputTexto.id = shortid.generate();

      const listanombres = [...lista, inputTexto];
      guardarlista(listanombres);
      const datos = JSON.stringify(listanombres);
      await AsyncStorage.setItem('listaalumno', datos);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDatosStorage = async () => {
    try {
      const nombreStorage = await AsyncStorage.getItem('listaalumno');
      if (nombreStorage) {
        guardarlista(JSON.parse(nombreStorage));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarDato = async(id) => {
    try {
      const listado = lista.filter((alumno) => alumno.id !== id);
      guardarlista(listado);
      await AsyncStorage.setItem('listaalumno', listado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.contenedor}>
        <TextInput
          placeholder="Escribe tu Nombre"
          style={styles.input}
          onChangeText={(texto) =>
            guardarInputTexto({ ...inputTexto, nombre: texto })
          }
        />
        <TextInput
          placeholder="Escribe tu Edad"
          style={styles.input}
          onChangeText={(texto) =>
            guardarInputTexto({ ...inputTexto, edad: texto })
          }
        />
        <TextInput
          placeholder="Escribe tu Carrera"
          style={styles.input}
          onChangeText={(texto) =>
            guardarInputTexto({ ...inputTexto, carrera: texto })
          }
        />

        <Button title="Guardar" color="#333" onPress={() => guardarDato()} />

        <Text style={styles.titulo}>
          {lista.length > 0 ? 'Lista de alumnos' : 'No hay alumnos, agrega uno'}
        </Text>

        <FlatList
          style={styles.item}
          data={lista}
          renderItem={({ item }) => (
            <Lista lista={item} eliminar={eliminarDato} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});
