// variable

var myName = "Roman"; // string value 
var myAge = 17; // numeric value
var inRelation = false; // boolen value
console.log(myName + myAge + inRelation);
console.log(myName.length);

// array

var myFriendAge = [23, 43, 35, 345, 343, 354, 34];
console.log(myFriendAge);
console.log(myFriendAge[4]);
console.log(myFriendAge.length);
console.log(myFriendAge.indexOf(343));
myFriendAge.push(34);
console.log(myFriendAge);
myFriendAge.push(36);
console.log(myFriendAge);
myFriendAge.pop();
console.log(myFriendAge);
myFriendAge.shift();
console.log(myFriendAge);
myFriendAge.unshift(22);
console.log(myFriendAge);


// conditional

if(inRelation == true){
    console.log("go and merry her");
}
else if(myAge >= 18){
    console.log("i will merry you");
}
else{
    console.log("go and find someone else");
}

// and &&

if(inRelation == false && myAge >= 18){
    console.log("ok let's meet");
}
else{
    console.log("i will kill you");
}


// or ||

if(inRelation == false || myAge >= 18){
    console.log(" ok ,,, it will go");
}
else{
    console.log("tor haddi ektao thakbe na ");
}