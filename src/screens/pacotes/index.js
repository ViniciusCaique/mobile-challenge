
import React,{ useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from "@react-navigation/native";


import { Header } from "../../components/Header";

export default function Pacote({route,navigation}) {

    
    const [ packs, setPacks ] = useState([])

    const { getItem, setItem, } = useAsyncStorage('@pacotes')

    const carregarDados = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const items = await AsyncStorage.multiGet(keys);
  
          const parsedItems = items.map(([key, value]) => ({
            id: key,
            ...JSON.parse(value),
          }));
  
          setPacks(parsedItems);
        } catch (error) {
          console.error('Erro ao carregar os dados:', error);
        }
    }

    async function getPacks() {
        const res = await getItem()
        const packs = res ? JSON.parse(res) : []
        setPacks(packs)
    }

    async function removePacks(id) {
        const res = await getItem()
        const previousData = res ? JSON.parse(res) : []

        const data = previousData.filter((item) => item.id !== id)
        setItem(JSON.stringify(data))
        setPacks(data)
    }

    const handleDelete = async () => {
        try {
        
          // Obtém as chaves existentes no AsyncStorage
          const keys = await AsyncStorage.getAllKeys();
          const {item}  = route.params;
        
          // Remove a chave correspondente
          await AsyncStorage.removeItem(item.id);
          
          // Atualiza a lista de dados
          const updatedData = keys.filter((key) => key !== item.id);
          console.log("Item excluído com sucesso!")
          navigation.navigate('Inicio', { updatedData });
        } catch (error) {
          console.error('Erro ao excluir o item:', error);  
        }
      };
    
    useFocusEffect(
        React.useCallback(() => {
          carregarDados();
        }, [])
      );

    return(
        <View style={{ flex: 1, justifyContent: "center", paddingTop: 30, backgroundColor: "#343A40" }}>
            <Header />
            <View style={{ alignItems: "center", width: "100%", height: "90%", padding: 20, backgroundColor: "#6c757d" }}>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start"}}>
                <Text style={{  color: 'white', fontSize: 25, padding: 20 }}>Cadastrar Pacote</Text>
                <TouchableOpacity>
                    <Feather 
                        name='plus'
                        size={25}
                        color={'white'}
                        onPress={() => navigation.navigate("New")}
                    />
                </TouchableOpacity>
                </View>
                    <FlatList
                    style={{ flex: 1, width: '100%', padding: 20, margin: 10 }}
                    data={packs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={{ flex: 1, borderStyle:"solid", borderWidth: 2, borderRadius: 8, padding: 10, margin: 5, }}
                        >
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('NoteView', { item })}
                            >
                                <Text
                                    style={{ fontWeight: "600", fontSize: 20 }}
                                >{item.name}</Text>
                                <Text>{item.type}</Text>
                                <Text>{item.description}</Text>

                                <View
                                    style={{ flex: 1, }}
                                >
                                    <TouchableOpacity>
                                        <Feather 
                                            name='edit'
                                            size={25}
                                            onPress={() => navigation.navigate('Edit', { item })}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather 
                                            name='trash-2'
                                            size={25}
                                            onPress={handleDelete}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}