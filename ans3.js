function validateUsername(value) {

    if (value.length < 4) {
        // console.log("Too Short")
        return "Too Short"
    }
    else if (value.includes(" ")) {
        // console.log("No space Allowed")
           return "No space Allowed"
    }
    else if (value.toLowerCase().includes("admin")) {
        // console.log("Reserved Word")
           return "Reserved Word"
    }
    else {
        // console.log("Available")
           return "Available"
    }
}
validateUsername("rahim123")
validateUsername("ab")
validateUsername("a b")
validateUsername("abcd")
validateUsername("rahim islam")
validateUsername("superadmin99")
validateUsername("Admin_Rahim")




