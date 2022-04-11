import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
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
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          marginTop: 16,
          fontWeight: "bold",
          color: "#550AB1",
        }}
      >
        Button Completo e Customizável
      </Text>
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
          title="Primário desabilitado"
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
        <Button
          style={{ marginBottom: 20 }}
          iconName="shoppingcart"
          variant="blackFriday"
          onPress={onPressButton}
          title="Black Friday"
        />
        <Button
          isLoading
          style={{ marginBottom: 20 }}
          iconName="shoppingcart"
          variant="blackFriday"
          onPress={onPressButton}
          title="Black Friday"
        />
      </View>
    </SafeAreaView>
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
