import { useState } from "react";
import { View, Text, Button, ScrollView, Switch, FlatList, StyleSheet } from "react-native";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const ClickAlert = () => {
    alert("Button Clicked")
  }

  const Data = [
    {
      id: 1,
      title : "First Item"
    }, 
    {
      id : 2,
      title : "Second Item"
    },
    {
      id : 3,
      title: "Third Item"
    }
  ]

  return (
      // <View>
    //   {/* <Text style={{fontSize : 24}}>Hello From Home Screen🔥🔥</Text>
    //   <Button title="Click me" onPress={ClickAlert}/> */}
    // </View>
    // <ScrollView>
    //   {
    //     [...Array(60)].map((_, i) => {
    //       return <Text key={i}>HELLLO {i+1}</Text>;
    //     })
    //   }

    //   <Switch
    //     value={isEnabled}
    //     onValueChange={toggleSwitch}
    //   />
    // </ScrollView>

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Collections</Text>
        <Text style={styles.title}>Clean, simple list</Text>
        <Text style={styles.subtitle}>A more premium look for your FlatList screen.</Text>
      </View>

      <FlatList
        data={Data}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{index + 1}</Text>
            </View>
            <Text style={styles.item}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>

    
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1220",
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    marginBottom: 20,
  },
  label: {
    color: "#7DD3FC",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
  },
  subtitle: {
    color: "#94A3B8",
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#1F2937",
    borderRadius: 18,
    padding: 16,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#1D4ED8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  badgeText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  item: {
    color: "#F8FAFC",
    fontSize: 16,
    fontWeight: "600",
  },
})


export default HomeScreen