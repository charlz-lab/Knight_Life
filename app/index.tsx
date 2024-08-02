import { Text, View } from "react-native";
import EventCard from "../components/EventCard";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EventCard imageUrl={""} eventName={"KnightLife"} hostName={"KnightLife"} eventDateTime={""} onPress={function (): void {
        throw new Error("waiting for navigation");
      }} />
    </View>
  );
}
