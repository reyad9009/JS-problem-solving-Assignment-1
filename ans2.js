function getDayType(day) {
    day = day.toLowerCase();
    switch (day) {
        case "friday":
        case "saturday":
            console.log("Weekend")
            break;

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            console.log("Working Day");
            break;
        default:
            console.log("Invalid Day")
    }

}

getDayType("FridaY")
getDayType("Saturday")
getDayType("MONDAY")
getDayType("Bandarban")