import { Text } from "../Text/Text";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";
import { ActivityIndicator } from "react-native";

interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
}

export function Button({ title, loading, ...touchableOpacityBoxProps }: ButtonProps) {

    return (
        <TouchableOpacityBox
            backgroundColor="buttonPrimary"
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...touchableOpacityBoxProps}
        >
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text preset="paragraphMedium" bold color="grayWhite">{title}</Text>
            )}
        </TouchableOpacityBox >
    )
}