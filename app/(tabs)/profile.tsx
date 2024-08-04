import { Text, View } from "react-native";
import ProfileCard from "@/components/ProfileCard";
import ToggleBar from "@/components/ToggleBar"
import { useState } from "react";

export default function Profile() {
    const [selection, setSelection] = useState("upcoming")

    let defaultPersonal = {
        name: "Jane Doe",
        username: "janedoe",
        school_year: "Senior",
        major: "Web Design",
        campus_location: "Downtown",
        accountType: "personal"
    }

    let defaultCreator = {
        name: "Chess Club",
        username: "UCFCHESS",
        campus_location: "Main Campus",
        bio: "We love chess!",
        eventsNum: "20",
        followersNum: "200",
        accountType: "creator",
        isCreator: true,
    }

    return (
        <View>
            <ProfileCard
                profile={defaultPersonal}></ProfileCard>
            <ToggleBar
                tabs={["upcoming", "attended"]}
                selection={selection}
                setSelection={setSelection}
            />
        </View>
    );
}