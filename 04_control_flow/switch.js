// //switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//break is usually for breaking the controll flow
//if we dont use break it will execute all the cases after the matched case

const month = 2
switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;

    default:
        console.log("not a valid month");
        
        break;
}
const month2 = "march"
switch (month2) {
    case "january":
        console.log("January");
        
        break;
    case "feb":
        console.log("feb");
        
        break;
    case "march":
        console.log("march");
        
        break;
    case "april":
        console.log("april");
        
        break;

    default:
        console.log("not a valid month");
        
        break;
}