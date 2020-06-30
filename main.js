// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
let body = document.createElement("body")
let kata1Heading = document.createElement("h1")
let kata2Heading = document.createElement("h1")
let kata3Heading = document.createElement("h1")
let kata4Heading = document.createElement("h1")
let kata5Heading = document.createElement("h1")
let kata6Heading = document.createElement("h1")
let kata7Heading = document.createElement("h1")

main.append(body)
body.append(kata1Heading)
kata1Heading.append("Kata 1")






let kata1 = users.filter(user => user.isActive === true)

body.append(JSON.stringify(kata1))

console.groupCollapsed("Kata 1")
console.log(kata1)
console.groupEnd()





let kata2 = users.map(user => user.email)

body.append(kata2Heading)
kata2Heading.append("Kata 2")

body.append(JSON.stringify(kata2))

console.groupCollapsed("Kata 2")
console.log(kata2)
console.groupEnd()






let kata3 = users.some(DAP => DAP.company === "OVATION")

body.append(kata3Heading)
kata3Heading.append("Kata 3")

body.append(JSON.stringify(kata3))

console.groupCollapsed("Kata 3")
console.log(kata3)
console.groupEnd()




let kata4 = users.find(asdf => asdf.age > 38)

body.append(kata4Heading)
kata4Heading.append("Kata 4")
body.append(JSON.stringify(kata4))

console.groupCollapsed("Kata 4")
console.log(kata4)
console.groupEnd()




let kata5 = users.find( kata5Thing => kata5Thing.age > 38 && kata5Thing.isActive === true)

body.append(kata5Heading)
kata5Heading.append("Kata 5")
body.append(JSON.stringify(kata5))

console.groupCollapsed("Kata 5")
console.log(kata5)
console.groupEnd()





let kata6 = users.filter( kata6Thing => kata6Thing.company === "ZENCO").map(kata6Thing => kata6Thing.balance)


body.append(kata6Heading)
kata6Heading.append("Kata 6")
body.append(JSON.stringify(kata6))

console.groupCollapsed("Kata 6")
console.log(kata6)
console.groupEnd()





let kata7 = users.filter( kata7Thing => kata7Thing.tags.includes("fugiat")).map(kata7Thing => kata7Thing.age)

body.append(kata7Heading)
kata7Heading.append("Kata 7")
body.append(JSON.stringify(kata7))

console.groupCollapsed("Kata 7")
console.log(kata7)
console.groupEnd()