import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type CardViewProps = {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
    onPress?: () => void;
};

export default function CardView({children, style, onPress}: CardViewProps) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} disabled={!onPress}>
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
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 3,
    },
});