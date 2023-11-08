import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { BackButton } from "../components/BackButton";


export function Register({ navigation }) {
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
                />
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="E-mail"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    type="text"
                />
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="Senha"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    type="text"
                />
                <TouchableOpacity onPress={() => Alert.alert('ainda nao')}>
                    <Text style={{ color: 'white' }}>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Login')}>
                    <Text style={{ color: 'white' }}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}