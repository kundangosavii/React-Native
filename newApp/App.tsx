import React from "react";

import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
  const isDarkMode = useColorScheme() === "light"
  return (

    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}
      >
        <View style={styles.content}>
          <Text style={[styles.text, isDarkMode ? styles.textDark : styles.textLight]}>Hello World</Text>
          <Text style={[styles.text, isDarkMode ? styles.textDark : styles.textLight]}>Welcome to react-native</Text>
        </View>
        <View style={[styles.footer, isDarkMode ? styles.footerDark : styles.footerLight]}>
          <Text style={[styles.text, isDarkMode ? styles.textDark : styles.textLight]}>Footer Content</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: "#f5f5f5",
  },
  containerDark: {
    backgroundColor: "#0f172a",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 4,
  },
  textLight: {
    color: "#1f2937",
  },
  textDark: {
    color: "#e5e7eb",
  },
  footer: {
    padding: 16,
    alignItems: "center",
  },
  footerLight: {
    backgroundColor: "#e5e7eb",
  },
  footerDark: {
    backgroundColor: "#111827",
  },
})

export default App;