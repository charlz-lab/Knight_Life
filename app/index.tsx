import { Text, View } from "react-native";
import EventCard from "./components/EventCard";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <EventCard imageUrl={""} eventName={"KnightLife"} hostName={"KnightLife"} eventDateTime={""}/>
    </View>
  );
}
