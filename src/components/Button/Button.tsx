import { Text } from "../Text/Text";
import { TouchableOpacityBox } from "../Box/Box";
import { ActivityIndicator } from "react-native";

interface ButtonProps {
    title: string;
    loading?: boolean;
}

export function Button({ title, loading }: ButtonProps) {

    return (
        <TouchableOpacityBox
            backgroundColor="buttonPrimary"
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
        >
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text preset="paragraphMedium" style={{ color: 'white' }} bold>{title}</Text>
            )}
        </TouchableOpacityBox >
    )
}