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
  variant?: "primary" | "outline" | "blackFriday";
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

  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.container, buttonStyle.button, style]}
    >
      {isLoading ? (
        <ActivityIndicator color={buttonStyle.icon.color} />
      ) : (
        <View style={styles.content}>
          {iconName && (
            <AntDesign
              style={{ marginRight: 12 }}
              name={iconName}
              size={24}
              color={buttonStyle.icon.color}
            />
          )}
          <Text style={[styles.title, { color: buttonStyle.title.color }]}>
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
    height: 60,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
