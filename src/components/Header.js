
import { Text, View } from "react-native";


export function Header() {
    return(
        <View 
            style={{ flex: 1, alignItems: "center" }}
        >
            <Text
                style={{  fontSize: 50, color: 'white' }}
            >
                FindIT
            </Text>
        </View>
    )
}