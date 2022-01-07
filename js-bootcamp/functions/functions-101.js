let myBook =  {
    title: '1985',
    author: "George Orwell",
    pageCount: 326
}

console.log(myBook.title);

// Temparature Obj/Calculation
let temp = {
    f: 75,
    c: 0,
}
let getTemp = function (temp){
    let celcius = (((temp.f - 32)*5)/9);
    temp.c = celcius;
    return {
        far: temp.f + ' farenehit',
        cel: Math.round(temp.c) + ' celcius',
    }
}

let tempConvert = getTemp(temp);
console.log(tempConvert.far + " is " + tempConvert.cel);

