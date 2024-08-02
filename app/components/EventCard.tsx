import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Ionicon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import supabase from "../lib/supabase";

interface Event {
    id: string;
    name: string;
    image: string;
    creator_name?: string;
    location: string;
    attending_count: number;
    isBookmarked?: boolean;
}

interface EventCardProps {
    event: Event;
    navigation: any;
    onBookmarkToggle: (id: string, isBookmarked: boolean) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, navigation, onBookmarkToggle }) => {
    const handlePress = () => {
        // navigates to the event details page with event data
        navigation.navigate("EventPage", { event });
    };
    const [isBookmarked, setIsBookmarked] = useState<boolean>(event.isBookmarked || false);

    const handleBookmarkToggle = () => {
        setIsBookmarked(!isBookmarked);
        onBookmarkToggle(event.id, !isBookmarked); // Notify parent component about the bookmark toggle
    };


    async function getImageData() {
        const { data, error } = await supabase
            .from("event")
            .download("image");
        if (error) {
            console.log("Error downloading image: ", error);
        } else {
            console.log("Image downloaded successfully");
        }
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <View style={[styles.cardContainer, styles.shadow]}>
                    <ImageBackground
                        source={{ uri: event.image }}
                        imageStyle={{ borderRadius: 14 }}
                        style={styles.imageBanner}
                    >
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={handleBookmarkToggle}
                                style={styles.bookmarkButton}
                            >
                                <Ionicon
                                    name={isBookmarked ? "bookmark" : "bookmark-o"}
                                    size={20}
                                    color="#FFC60A"
                                    style={styles.bookmark}
                                />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{event.name}</Text>
                        <Text style={styles.creator}>
                            Hosted By: {event.creator_name || ""}
                        </Text>
                        <View style={styles.locationContainer}>
                            <Icon
                                name="location-sharp"
                                type="ionicon"
                                size={13}
                                color="#676464"
                                style={styles.locationIcon}
                            />
                            <Text style={styles.locationText}>{event.location}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.membersGoing}>
                                {event.attending_count} Members Going{" "}
                            </Text>
                            <Icon
                                name="alert-circle-outline"
                                type="ionicon"
                                size={17}
                                color="#676464"
                                style={{ justifyContent: "space-between" }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "white",
    },
    cardContainer: {
        backgroundColor: "white",
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 12,
        width: "100%",
        marginBottom: 16,
    },
    shadow: {
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    textContainer: {
        paddingHorizontal: 10,
    },
    imageBanner: {
        flex: 1,
        height: 115,
        width: 328,
        borderRadius: 14,
        paddingHorizontal: 10,
        backgroundColor: "#E2E2E2",
    },
    bookmarkButton: {
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        color: "black",
        paddingVertical: 10,
        fontFamily: "IBMPlexSans-Regular",
    },
    creator: {
        color: "black",
        fontSize: 15,
        fontFamily: "IBMPlexSans-Medium",
    },
    locationContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    locationIcon: {
        marginRight: 3,
    },
    locationText: {
        fontSize: 13,
        color: "#676464",
    },
    membersGoing: {
        color: "#676464",
        fontSize: 12,
        fontFamily: "IBMPlexSans-Regular",
        marginTop: 8,
    },
});

export default EventCard;
