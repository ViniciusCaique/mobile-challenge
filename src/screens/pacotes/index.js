
import React,{ useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from "@react-navigation/native";


import { Header } from "../../components/Header";

export default function Pacote({ route, navigation}) {

    
    const [ packs, setPacks ] = useState([])

    const { getItem, setItem, removeItem } = useAsyncStorage('@pacote')

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
        console.log(packs)
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
        useCallback(() => {
            getPacks();
        }, [])
      );

    return(
        // style={{ flex: 1, justifyContent: "center", paddingTop: 30,  }}
        <SafeAreaView className="flex justify-center items-center bg-zinc-950 w-full h-full">
            <ScrollView>
                <View>
                    <TouchableOpacity className="">
                        <Feather name='plus-circle' size={25} color={'white'}
                            onPress={() => navigation.navigate("New")}
                        />
                    </TouchableOpacity>
                </View>
                    {/* <FlatList
                    style={{ flex: 1, width: '100%', padding: 20, margin: 10 }}
                    data={packs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => { console.log(item) 
                        return (
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
                                            onPress={() => removePacks(item.id)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}}
                /> */}
            </ScrollView>
        </SafeAreaView>
    )
}