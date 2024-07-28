const appStyles = {
  profileCard: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 22,
    gap: 10,
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  // drop shadow
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  fonts: {
    // paragraph text
    paragraph: {
      fontFamily: "IBMPlexSans-Medium",
      fontSize: 16,
    },
    // heading text
    heading: {
      fontFamily: "Prompt-Bold",
      fontSize: 20,
      textAlign: "center",
    },
  },
  // Toggle bar for profile
  toggleContainer: {
    flexDirection: "row",
    columnGap: 0,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 40,
    marginBottom: 10,
    justifyContent: "space-between",
  },
};
export default appStyles;
