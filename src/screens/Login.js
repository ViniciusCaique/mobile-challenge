import { Text, TouchableOpacity, View, TextInput, Alert } from "react-native";
import { BackButton } from "../components/BackButton";


export function Login({ navigation }) {
    return(
        <View style={{ flex: 1, justifyContent: "center", paddingRight: 32, paddingLeft: 32, paddingTop: 30 }}>

            <BackButton />

            <View style={{ alignItems: "center", paddingTop: 250, paddingBottom: 250 }}>
                <Text>Entrar</Text>
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="E-mail"
                    placeholderTextColor="#808080"
                    keyboardAppearance="dark"
                    type="text"
                />
                <TextInput
                    style={{ width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#000000', borderRadius: 5 ,margin: 10, padding: 5 }}
                    placeholder="Senha"
                    placeholderTextColor="#808080"
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    type="text"
                />
                <TouchableOpacity
                    onPress={() => navigation.push('Register')}
                >
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Alert.alert('ainda nao')}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}