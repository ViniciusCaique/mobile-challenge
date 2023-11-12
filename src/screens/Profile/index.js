
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { auth, db } from "../../config/firebase";

import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";


export default function Profile() {

    const [ users, setUsers ] = useState([]);

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

    useEffect(() => {
        loadUsers()
    }, [])

    return(
        <View>
            <Text>OI</Text>
            <Text>nome: </Text>
            <Text>email: {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}