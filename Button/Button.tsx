import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  TouchableOpacityProps,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { variants } from "./variants";

interface ButtonProps {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof AntDesign.glyphMap;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "outline";
  style?: TouchableOpacityProps["style"];
}

export function Button({
  onPress,
  title,
  isLoading,
  iconName,
  disabled,
  variant = "primary",
  style,
}: ButtonProps) {
  const buttonVariant = variants[variant];

  const buttonColors = disabled
    ? buttonVariant.disabled
    : buttonVariant.enabled;

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.container, buttonColors.button, style]}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <View style={styles.content}>
          {iconName && (
            <AntDesign
              style={{ marginRight: 12 }}
              name={iconName}
              size={24}
              color={buttonColors.icon.color}
            />
          )}
          <Text style={[styles.title, { color: buttonColors.title.color }]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 50,
  },
  content: {
    flexDirection: "row",
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
