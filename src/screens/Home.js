import { Text, View } from "react-native";
import { Header } from "../components/Header";


export function Home(){
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Header />
            <Text>Bem Vindo ao FindIt, esperamos que goste daqui.</Text>
        </View>

    )
}