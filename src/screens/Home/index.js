import { SafeAreaView, ScrollView, Text, View, } from "react-native";
import Card from "../../components/Card";


export default function Home(){
    return(
        <SafeAreaView className="flex justify-center items-center bg-zinc-950 w-full h-full">
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Card title={"Viajar sem se estressar"} description={"Aqui você descobre seu próximo destino sem se estressar com pesquisas demoradas e debates que só geram discussão! Viajar é bom demais então não perca mais tempo, hora de conhecer um lugar novo!Assine nosso plano premium para ter acesso a dicas de viagem e promoções incriveis."}/>
            </ScrollView>
        </SafeAreaView>
    )
}