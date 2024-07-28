const header = "Prompt-Bold";
const normal = "IBMPlexSans";

export const Fonts = {
  /*
    Additional Features:
      Please use sparingly for generalized
      added features that aren't consistent
      in the app design.
  */
  centered: {
    textAlign: "center",
  },

  /* 
    General Style Guide:
      Stick to these as much as possible,
      only using the ones above if needed.
  */
  heading: {
    h1: {
      fontFamily: header,
      fontSize: 28,
      lineHeight: 28,
    },
    h2: {
      fontFamily: normal + "-Bold",
      fontSize: 22,
    },
    h3: {
      fontFamily: normal + "-Semibold",
      fontSize: 16,
      textTransform: "uppercase",
    },
  },
  body: {
    paragraph: {
      fontFamily: normal + "-Regular",
      fontSize: 16,
    },
    link: {
      fontFamily: normal + "-Semibold",
      fontSize: 16,
      textDecorationLine: "underline",
    },
  },
  button: {
    fontFamily: normal + "-Semibold",
    fontSize: 18,
  },
  input: {
    fontFamily: normal + "-Regular",
    fontSize: 18,
  },
};
