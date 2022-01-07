// Global scope( temp, getTemp, tempConvert)
    // Local scope (celcius, temp)
        // Local scope (isFreezing)
let temp = {
    f: 75,
    c: 0,
}
let getTemp = function (temp){
    let celcius = (((temp.f - 32)*5)/9);
    temp.c = celcius;

    if(celcius <= 0){
        let isFreezing = true
    }
    return {
        far: temp.f + ' farenehit',
        cel: Math.round(temp.c) + ' celcius',
    }
}

let tempConvert = getTemp(temp);
console.log(tempConvert.far + " is " + tempConvert.cel);