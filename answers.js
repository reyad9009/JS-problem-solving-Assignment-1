// Question 1 Ans.
function describeValue(value) {
    return `${typeof value} | ${String(value ? "truthy" : "falsy")}`;
}


// Question 2 Ans.
function getDayType(day) {

    day = day.toLowerCase();

    switch (day) {

        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

// Question 3 Ans.
function validateUsername(value) {
    if (value.length < 4) {
        return "Too Short";
    }
    else if (value.includes(" ")) {
        return "No space Allowed";
    }
    else if (value.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}

// Question 4 Ans.
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2 ) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if (isNight) {
      fare = fare + (fare * 20/100);
    }
    return fare;
}