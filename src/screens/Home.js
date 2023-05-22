import { Text, View } from "react-native";
import { Header } from "../components/Header";


export function Home(){
    return(
        <View style={{ flex: 1, justifyContent: "center", paddingTop: 50, backgroundColor: "#343A40" }}>
            {/* borderWidth: 5, borderStyle: "solid", borderColor: "yellow", so pra marcar dps */}
            <Header />
            <View style={{ alignItems: "center", width: "100%", height: "90%", padding: 20, backgroundColor: "#6c757d" }}>
                <Text
                    style={{  color: 'white', fontSize: 25, padding: 20 }}
                >
                    Viajar sem se estressar!
                </Text>

                <Text
                    style={{ color: 'white' }}
                >
                    Aqui você descobre seu próximo destino sem se estressar com pesquisas demoradas e debates que só geram discussão! 
                    Viajar é bom demais então não perca mais tempo, hora de conhecer um lugar novo!
                    Assine nosso plano premium para ter acesso a dicas de viagem e promoções incriveis.
                </Text>
            </View>
        </View>
    )
}