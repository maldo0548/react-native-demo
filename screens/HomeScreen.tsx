import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView, View } from "react-native";
import MainLogo from "../assets/main-logo.png";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView className="flex-1 bg-gray-100 relative">
            <ScrollView>
                {/* PRO/UPGRADE Button */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Paywall");
                    }}
                    className="absolute z-50 top-5 right-5 items-center"
                >
                    <Ionicons name="person-circle" size={30} color="#E5962D" />
                    <Text className="text-center text-[#E5962D]">UPGRADE</Text>
                </TouchableOpacity>

                {/* Image */}
                <Image source={MainLogo} className="w-full h-64" />

                {/* ActionRows */}
                <View className="mx-5">
                    <View className="flex flex-row justify-between space-x-2">
                        <ActionRow title="Track Workout" screen="Demo" color="#E5962D" icon="fitness" vertical />
                        <ActionRow title="Browse Workouts" screen="Demo" color="#1982C4" icon="library" vertical />
                    </View>
                    <ActionRow title="Connect with Friends" screen="Demo" color="#F44174" icon="share-social" />
                    <ActionRow title="Add an Exercise" screen="Paywall" color="#8AC926" icon="add-circle" requiresPro />
                    <ActionRow title="Create a Routine" screen="Paywall" color="#C03221" icon="md-time" requiresPro />
                    <ActionRow title="Join Challenges" screen="Paywall" color="#23967F" icon="trophy" requiresPro />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
