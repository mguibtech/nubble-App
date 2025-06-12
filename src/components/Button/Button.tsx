import { TouchableOpacity } from "react-native";
import { Text } from "../Text/Text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme/theme";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {

    const { colors } = useTheme<Theme>()
    return (
        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: colors.buttonPrimary, borderRadius: 10, alignItems: 'center' }} onPress={onPress} >
            <Text preset="paragraphMedium" bold>{title}</Text>
        </TouchableOpacity>
    )
}