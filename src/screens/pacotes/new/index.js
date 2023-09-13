
import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import { useState, useEffect } from 'react';

import uuid from 'react-native-uuid';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';



import { Header } from "../../../components/Header";




export default function FormPacote() {

    const [ name, setName ] = useState('')
    const [ type, setType ] = useState('')
    const [ description, setDescription ] = useState('')

    const { getItem, setItem } = useAsyncStorage('@pacotes')

    async function createPacote() {
        try {

            const id = uuid.v4();

            const newPack = {
                id,
                name,
                type,
                description,
            }

            const res = await getItem()
            const previousData = res ? JSON.parse(res) : []
            previousData.push(newPack)
            await setItem(JSON.stringify(previousData))

            setName('')
            setType('')
            setDescription('')
        } catch (error) {
        //   throw new Error('Erro ao inserir dados: ', error)
            console.log(error)
        }
    }

    useEffect(() => {
        createPacote()
    }, [])

    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 30, backgroundColor: "#343A40" }}>
            <Header />
            <View style={{ alignItems: "center", width: "100%", height: "90%", padding: 20, backgroundColor: "#6c757d" }}>
                <Text style={{  color: 'white', fontSize: 25, padding: 20 }}>Cadastrar Pacote</Text>
                <Text>Nome</Text>
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 , borderRadius: 10, padding: 4 }}
                    placeholder='Nome'
                    onChangeText={setName}
                    value={name}
                />
                <Text>Tipo</Text>
                <TextInput 
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 10, marginBottom: 5 ,padding: 4 }}
                    placeholder='Tipo'
                    onChangeText={setType}
                    value={type}
                />
                <Text>Descrição</Text>
                <TextInput 
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 10, marginBottom: 5 ,padding: 4 }}
                    placeholder='Descrição'
                    onChangeText={setDescription}
                    value={description}
                />
                <TouchableOpacity
                    style={{ borderWidth: 2, borderRadius: 6, borderColor: 'black', padding: 4}}
                    onPress={createPacote}
                >
                    <Text> Salvar </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}