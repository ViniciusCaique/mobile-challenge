
import React,{ useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Feather } from '@expo/vector-icons'
import { useFocusEffect } from "@react-navigation/native";


export default function Pacote({ route, navigation}) {

    
    const [ packs, setPacks ] = useState([])

    const { getItem, setItem, removeItem } = useAsyncStorage('@pacote')

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


    useFocusEffect(
        useCallback(() => {
            getPacks();
        }, [])
      );

    return(
        // style={{ flex: 1, justifyContent: "center", paddingTop: 30,  }}
        <SafeAreaView className="flex justify-center items-center bg-zinc-950 w-full h-full">
            <View>
                <View className="items-center">
                    <TouchableOpacity className="">
                        <Feather name='plus-circle' size={25} color={'white'}
                            onPress={() => navigation.navigate("New")}
                        />
                    </TouchableOpacity>
                </View>
                    <FlatList
                    style={{ flex: 1, width: '100%', padding: 20, margin: 10 }}
                    data={packs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => { console.log(item) 
                        return (
                        <View
                            style={{ flex: 1, borderStyle:"solid", borderWidth: 2, borderRadius: 8, padding: 10, margin: 5, borderColor: 'white' }}
                        >
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('NoteView', { item })}
                            >
                                <Text style={{ fontWeight: "600", fontSize: 20, color: 'white' }}>{item.name}</Text>
                                <Text style={{ color: 'white' }}>{item.type}</Text>
                                <Text style={{ color: 'white' }}>{item.description}</Text>

                                <View
                                    style={{ flex: 1, }}
                                >
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ color: 'white' }}
                                            name='edit'
                                            size={25}
                                            onPress={() => navigation.navigate('Edit', { item })}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather
                                            style={{ color: 'white' }}
                                            name='trash-2'
                                            size={25}
                                            onPress={() => removePacks(item.id)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}}
                />
            </View>
        </SafeAreaView>
    )
}