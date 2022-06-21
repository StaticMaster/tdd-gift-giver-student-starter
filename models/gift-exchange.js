// classname = GiftExchange;{
// static pairs(names)
// {
//     if (names.length % 2 == 0){
//         let pairs = []
//         let numOfPairs = names.length / 2
//         let usedNames =[]
//         let name1 = names[Math.floor(Math.random() * (names.length -1))]
//         let name2 = names[Math.floor(Math.random() * (names.length -1))]
//         for (let i = 0; i < numOfPairs; i++){
//             if (usedNames.includes(name1)){
//                 // Randomize it again b/c it's a duplicate
//                 name1 = names[Math.floor(Math.random() * (names.length -1))]
//                 // Failed, need to run the loop again
//                 i = i - 1
//             }
//             else if (usedNames.includes(name2)){
//                 // Randomize it again b/c it's a duplicate
//                 name2 = names[Math.floor(Math.random() * (names.length -1))]
//                 // Failed, need to run the loop again
//                 i = i - 1
//             }
//             else if (name1 === name2){
//                 // Randomize it again b/c it's a duplicate
//                 name1 = names[Math.floor(Math.random() * (names.length -1)) +1]
//                 // Failed, need to run the loop again
//                 i = i - 1
//             }
//             else {
//                 usedNames.push(name1)
//                 usedNames.push(name2)
//                 pairs.push([name1,name2])
//             }
//         }
//         return pairs
//     }
//     else {
//         throw new Error("The number of names can't be odd.")
//     }
// }
// }


module.exports = GiftExchange;

//    let names = ["me", "you", "them", "us", "her", "him", "they", "y'all"]
// function traditional(names) {
//         let stringArray = []
//         let numOfNames = names.length
//         let usedNames = []
//         let sentence = " is giving a gift to "
//         let initialName1 = names[Math.floor(Math.random() * (names.length -1))]
//         let randomName =
// else if (usedNames.length === names.length) {
//                 console.log(4)
//                 let lastUsedName = usedNames[(usedNames.length)-1]
//                 let newSentence = lastUsedName + sentence + usedNames[0]
//                 stringArray.push(newSentence)
//             }
//             else {
//                 console.log(5)
//                 let lastUsedName = usedNames[(usedNames.length)-1]
//                 let newSentence = lastUsedName + sentence + randomName
//                 stringArray.push(newSentence)
//                 usedNames.push(randomName)
//             }
//         }

//         return stringArray
//     }
    



  

// 
