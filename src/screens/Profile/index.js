
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";

import { auth, db } from "../../config/firebase";

import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";

import openai from 'openai';

const YOUR_OPENAI_API_KEY = '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';

openai.apiKey = YOUR_OPENAI_API_KEY;

import { api } from '../../libs/axios'
import { params } from "../../libs/axios";


export default function Profile() {

    const [ users, setUsers ] = useState([]);

    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    const loadUsers = async () => {
        const queryOnDb = query(collection(db, 'users'));
        const querySnapshot = getDocs(queryOnDb);
    
        let users = []
    
        querySnapshot.forEach((doc) => {
            users.push(doc.data(), doc.id);
        });

        setUsers(users)
        console.log(users)

        // nao funcionou :(
    }

    const handleSignOut = () => {
        auth.signOut()
    }

    // const validadorPergunta = async (url) => {
    //     try {
    //         const response = await api.post(url, {
    //             prompt: `tell me a ${inputText}`,
    //             model: "text-davinci-003",
    //             max_tokens: 10,
    //             temperature: 0,
    //         })
    //         console.log(response.data);
    //         setResponseText(response.data.choices[0].text.trim());
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const validadorPergunta = async () => {
        try {
          const response = await openai.Chat.Completions.create({
            model: 'davinci-002',
            prompt: `${inputText} `,
            max_tokens: 10,
            temperature: 0,
          });
          console.log('OpenAI Response:', response.data);
          setResponseText(response.data.choices[0].text.trim());
        } catch (error) {
          console.error('OpenAI Error:', error);
        }
    };
    
    const processarTexto = () => {
        validadorPergunta(inputText);
    };

    useEffect(() => {
        loadUsers()
    }, [])

    return(
        <View>
            <Text>OI</Text>
            <Text>nome: </Text>
            <Text>email: {auth.currentUser?.email}</Text>

            {/* <TextInput 
            style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
            multiline = {true} numberOfLines = {4} type="text" /> */}

            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
            placeholder="Coloque suas informações"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            />
            <Button title="Processar" onPress={processarTexto} />
            <Text>{responseText}</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}
