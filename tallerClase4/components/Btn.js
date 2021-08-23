import React from 'react'
import { Text, StyleSheet,TouchableOpacity } from 'react-native'

const Btn = ({onPress,title}) => {
    return (
        <TouchableOpacity
        style={styles.btn}
        onPress={onPress}>
        <Text style={styles.btnText}>
          {title}
        </Text>
      </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    btn:{
        height: 60, 
        backgroundColor: "blue", 
        marginTop: 10,
        marginHorizontal:30,
        borderRadius:20
      },
      btnText:{ 
        color: "white",
        fontSize: 24,
        textAlign: "center",
        marginTop:10
      }
})

export default Btn
