function describeValue (value) {
    //return `${typeof value} | ${String(value)}`
    // return console.log(`${typeof value} | ${String(value)}`)
    return console.log(`${typeof value} | ${String(value ? "truthy": "falsy")}`)
  
    
}
// console.log(describeValue(45))

describeValue("hello")
describeValue("")
describeValue(25)
describeValue(0)
describeValue(true)
describeValue(null)
describeValue(undefined)