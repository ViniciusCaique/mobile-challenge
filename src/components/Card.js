
import { Text, View } from "react-native";


export default function Card({ title, description }){
    return(
        <View className="bg-zinc-800 max-w-xs p-4 mt-10 rounded-xl">
            <View className="gap-1 items-center">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <Text className="text-white text-lg">{description}</Text>
            </View>
        </View>
    )
}