import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';

import uuid from 'react-native-uuid';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';



export default function FormPacoteEdit({ route, navigation }) {
    
    const { item } = route.params

    const { getItem, setItem, } = useAsyncStorage('@pacote')

    const [ name, setName ] = useState('')
    const [ type, setType ] = useState('')
    const [ description, setDescription ] = useState('')

    const handleCancel = () => {
        navigation.goBack();
    }

    const updatePacote = async () => {
        try { 
          const res = await getItem()
          const pacoteEdit = res ? JSON.parse(res) : []

          const updatedPacote = pacoteEdit.filter(p => {
            if(p.id === item.id) {
              p.name = name,
              p.type = type,
              p.description = description
            }
            return p
          });

          await setItem(JSON.stringify(updatedPacote));
          console.log('Item atualizado com sucesso!');
          navigation.goBack(); // Voltar para a tela de detalhes
        } catch (error) {
          console.error('Erro ao atualizar o item:', error);
        }
    };

    useEffect(() => {
      setName(item.name);
      setType(item.type);
      setDescription(item.description);
    }, [])
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Editar Pacote</Text>
            <TextInput
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Tipo"
                value={type}
                onChangeText={setType}
                style={styles.input}
            />
            <TextInput
                placeholder="Descrição"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
            />
            <TouchableOpacity onPress={() => updatePacote()} style={styles.button}>
                <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={handleCancel} style={styles.button}>
                <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: "#6c757d"
    },
    input: {
      fontSize: 16,
      fontWeight: 'bold',
      borderWidth: 2,
      padding: 10,
      backgroundColor: "#6c757d",
      width: '50%',
      margin: 5,
      borderRadius: 10
    },
    button:{
      backgroundColor: "#6c757d",
      margin: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2
  
    },
    text:{
      fontWeight: 'bold',
      fontSize: 20
    }
  });