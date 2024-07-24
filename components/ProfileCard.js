import { Image, Pressable, Text, View } from "react-native";
import { useState, useEffect } from "react";
// import { Buffer } from "buffer";
import appStyles from "../app/styles"



const ProfileCard = (props) => {
  // const [imageData, setImageData] = useState(""); // state to hold the image data
  const [isCreator, setIsCreator] = useState(false); // state to hold the account type
  // // run whenever the profile prop changes

  return (
    <View style={[appStyles.profileCard, appStyles.shadow]}>
      <View
        style={{
          flexDirection: "row-reverse",
          alignSelf: "flex-end",
          columnGap: 10,
        }}
      >
        <Pressable 
        // implement navigation later
        // onPress={() => props.navigation.navigate("Settings")}
        >
          <Image
            source={require("../assets/icons/fi-br-settings.png")}
            style={{ width: 21, height: 21 }}
          ></Image>
        </Pressable>
        <Pressable
          // implement navigation later
          // onPress={() => {
          //   if (props.profile && typeof props.profile.isCreator !== 'undefined') {
          //     props.navigation.navigate("EDIT_PROFILE", props.profile);
          //   } else {
          //     console.error("Profile is not defined or doesn't have the isCreator field");
          //   }
          // }}
        >
          <Image
            source={require("../assets/icons/fi-br-edit.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
        </Pressable>
      </View>
      <Text style={appStyles.fonts.heading}>{props.profile.name}</Text>
      <Text style={appStyles.fonts.paragraph}>@{props.profile.username}</Text>
      <Text style={appStyles.fonts.paragraph}>{props.profile.campus_location}</Text>

      {/* <View style={appStyles.profileCard}>
        {props.profile && props.profile.image ? (
          <Image
            key={props.profile.image}
            source={{ uri: props.profile.image }}
            style={{ width: 125, height: 125, borderRadius: 125 / 2, resizeMode: 'cover' }}
          />
        ) : (
          <Image
            source={require("../images/profilePic_placeholder.png")}
            style={{ width: 125, height: 125, borderRadius: 125 / 2 }}
          />
        )}
        {/* Render creator's bio if creator account; else render personal account's year and major */}
        {props.profile.accountType === "creator" ? (
          <Text style={[appStyles.fonts.paragraph, { textAlign: "center" }]}>
            {props.profile.bio}
          </Text>
        ) : (
          <Text style={appStyles.fonts.paragraph}>
            {props.profile.school_year} - {props.profile.major}
          </Text>
        )}

      {props.profile.accountType === "creator" ? (
        <View style={{ flexDirection: "row", columnGap: 25, marginTop: 10 }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={appStyles.fonts.paragraph}>
              {props.profile.eventsNum}
            </Text>
            <Text style={appStyles.fonts.paragraph}>Events</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={appStyles.fonts.paragraph}>
              {props.profile.followersNum}
            </Text>
            <Text style={appStyles.fonts.paragraph}>Followers</Text>
          </View>
        </View>
      ) : null} 
    </View>
  );
};

export default ProfileCard;