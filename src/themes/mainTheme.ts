
export default (isDark: boolean) => ({
    colors: {
        primary: {
            main: "#4F5D2F",
            dark: "#2E361B",
            light: "#687A3E"
        },
        secondary: {
            main: "#628395",
            dark: "#405763",
            light: "#90A9B6"
        },
        c3: {
            main: "#3F2E56",
            dark: "#312442",
            light: "6C4F92"
        },
        c4: {
            main: "#401F3E",
            dark: "#291428",
            light: "#7C3C78"
        },
        bg: {
            main: "#FCDDBC",
            dark: "#F9BA77",
            light: "#FEF5EB"
        },
        type: {
            main: "#000",
            secondary: "#686868",
            onDark: "#fff",
        },
        error: { main: "#e60000" }
    },
    spacing: {
        "1": 4,
        "2": 8,
        "3": 12,
        "4": 16,
        "5": 20,
        "6": 24,
        "7": 28,
        "8": 32,
        small: 16,
        main: 24,
        large: 32
    }
})