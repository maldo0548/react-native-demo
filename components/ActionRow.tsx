import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
    title: string;
    screen: any;
    requiresPro?: boolean;
    color: string;
    icon?: any;
    vertical?: boolean;
};

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(screen)}
            className={`m-2 flex flex-1 justify-center items-center py-6 rounded-lg space-x-2 ${
                vertical ? "flex-column" : "flex-row"
            } `}
            style={{ backgroundColor: color }}
        >
            <Ionicons
                name={icon}
                size={30}
                color="white"
            />
            <Text className="text-white font-bold text-lg text-center">{title}</Text>
        </TouchableOpacity>
    );
};

export default ActionRow;
