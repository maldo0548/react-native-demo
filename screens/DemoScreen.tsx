import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView, View } from "react-native";
import { RootStackParamList } from "../App";
import { Ionicons } from "@expo/vector-icons";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const DemoScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className="bg-[#E5962D] flex-1">
            <TouchableOpacity
                className="flex-row items-center p-5"
                onPress={navigation.goBack}
            >
                <Ionicons
                    color="white"
                    name="arrow-back"
                    size={50}
                />
                <Text className="text-white">Go Back</Text>
            </TouchableOpacity>
            <Text>Demo Screen</Text>
        </SafeAreaView>
    );
};

export default DemoScreen;
