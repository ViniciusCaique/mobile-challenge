import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { BackButton } from "../components/BackButton";


export function Register({ navigation }) {
    return(
        <View style={{ flex: 1, justifyContent: "center", paddingRight: 32, paddingLeft: 32, paddingTop: 30 }}>

            <BackButton />

            <View style={{ alignItems: "center", paddingTop: 200, paddingBottom: 250 }}>
                <Text>Criar Conta</Text>
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="Nome"
                    placeholderTextColor="#000000"
                    type="text"
                />
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="E-mail"
                    placeholderTextColor="#000000"
                    keyboardAppearance="dark"
                    type="text"
                />
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="Senha"
                    placeholderTextColor="#000000"
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    type="text"
                />
                <TouchableOpacity
                    onPress={() => Alert.alert('ainda nao')}
                >
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('Login')}
                >
                    <Text>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}