import { StyleSheet } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.navBar.tabIconDefault,
        tabBarActiveTintColor: Colors.navBar.tabIconSelected,
        tabBarStyle: styles.tabContainer,
        tabBarItemStyle: styles.tab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={21} name="user-alt" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.navBar.background,
  },
  tab: {
    backgroundColor: Colors.navBar.background,
  },
});
