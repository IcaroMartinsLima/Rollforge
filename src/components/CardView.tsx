import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useTheme } from "../theme/ThemeContext";

type CardViewProps = {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
};

export default function CardView({ children, style, onPress }: CardViewProps) {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: theme.surface }, style]}
            onPress={onPress}
            disabled={!onPress}
        >
            <Text>CardView</Text>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        elevation: 3,
    },
});
