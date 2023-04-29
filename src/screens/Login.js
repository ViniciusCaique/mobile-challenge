import { Text, TouchableOpacity, View } from "react-native";


export function Login({ navigation }) {
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>oi</Text>
            <TouchableOpacity
                onPress={() => navigation.push('Register')}
            >
                <Text>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    )
}