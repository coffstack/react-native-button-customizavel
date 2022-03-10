import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "./Button/Button";

export default function App() {
  const [loading, setLoading] = useState(false);

  function onPressButton() {
    setLoading(true);
    console.log("pressionado");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  return (
    <View style={styles.container}>
      <Button
        style={{ marginBottom: 20 }}
        iconName="camera"
        isLoading={loading}
        onPress={onPressButton}
        title="Tirar Foto"
      />
      <Button
        disabled
        style={{ marginBottom: 20 }}
        isLoading={loading}
        onPress={onPressButton}
        title="Tirar Foto"
      />
      <Button
        style={{ marginBottom: 20 }}
        iconName="camera"
        isLoading={true}
        onPress={onPressButton}
        title="Tirar Foto"
      />

      <Button
        variant="outline"
        style={{ marginBottom: 20 }}
        iconName="bars"
        onPress={onPressButton}
        title="Outline Button"
      />
      <Button
        disabled
        style={{ marginBottom: 20 }}
        variant="outline"
        onPress={onPressButton}
        title="Desabilitado"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
