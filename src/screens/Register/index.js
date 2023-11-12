
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { BackButton } from "../../components/BackButton";

import uuid from 'react-native-uuid';


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase'
import { db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";


export function Register({ navigation }) {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ username, setUsername ] = useState('')

    const registerUser = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                const user = cred.user;
                // const userColletion = collection(db, 'users')
                // userColletion.doc(user.uid).setDoc({
                //     username,
                //     email,
                //     password
                // })
                const id = uuid.v4();

                const userCollection = doc(db, 'users', user.uid)
                setDoc(userCollection, {
                    id,
                    username,
                    email,
                    password
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })
    }

    // const user = cred.user;
    // if (user.apiKey !== null) {
    //     navigation.navigate('Login');
    // }

    return(
        <View style={{ flex: 1, justifyContent: "center", paddingRight: 32, paddingLeft: 32, paddingTop: 30, backgroundColor: "#6c757d" }}>

            <BackButton />

            <View style={{ alignItems: "center", paddingTop: 200, paddingBottom: 250 }}>
                <Text style={{ color: 'white' }}>Criar Conta</Text>
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="Nome"
                    placeholderTextColor="#FAF9F6"
                    type="text"
                    onChangeText={(username) => setUsername(username)}
                    value={username}
                />
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="E-mail"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    type="text"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="Senha"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    type="text"
                    onChangeText={(pass) => setPassword(pass)}
                    value={password}
                />
                <TouchableOpacity onPress={registerUser}>
                    <Text style={{ color: 'white' }}>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'white' }}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}