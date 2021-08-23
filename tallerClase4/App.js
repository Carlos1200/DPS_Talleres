import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Btn from './components/Btn';


const App=()=> {

  const[text1,settext1]=useState('');
  const[text2,settext2]=useState('');
  const[resultado,setresultado]=useState('');

  const Sumar=(var1,var2)=>{
    const a = parseFloat(var1);
    const b= parseFloat(var2);
    const c= a+b;
    const resul="resultado:"+a+" + "+b+" = "+c;
    setresultado(resul);
  }
  const Restar=(var1,var2)=>{
    const a = parseFloat(var1);
    const b= parseFloat(var2);
    const c= a-b;
    const resul="resultado:"+a+" - "+b+" = "+c;
    setresultado(resul);
  }
  const Multiplicar=(var1,var2)=>{
    const a = parseFloat(var1);
    const b= parseFloat(var2);
    const c= a*b;
    const resul="resultado:"+a+" x "+b+" = "+c;
    setresultado(resul);
  }
  const Dividir=(var1,var2)=>{
    const a = parseFloat(var1);
    const b= parseFloat(var2);
    const c= a/b;
    const resul="resultado:"+a+" / "+b+" = "+c;
    setresultado(resul);
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>
        Operaciones basicas
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder='Valor 1'
        keyboardType='numeric'
        onChangeText={(text1) => settext1(text1)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Valor 2'
        keyboardType='numeric'
        onChangeText={(text2) => settext2(text2)}
      />
      <Btn onPress={()=>Sumar(text1,text2)} title="Sumar" />
      <Btn onPress={()=>Restar(text1,text2)} title="Restar" />
      <Btn onPress={()=>Multiplicar(text1,text2)} title="Multiplicar" />
      <Btn onPress={()=>Dividir(text1,text2)} title="Dividir" />
      <Text style={{ fontSize: 32,textAlign:'center' }}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput:{
    padding: 5,
    height: 40,
    borderColor: "blue",
    borderWidth: 2,
    marginTop: 10,
    marginHorizontal:25,
    borderRadius:20,
    fontSize:16,
    paddingLeft:10
  },
  title:{
    padding: 15,
    fontSize: 24,
    backgroundColor: "orange",
    color: "white",
    textAlign: "center",
    marginHorizontal:20
  },
  
});

export default App;