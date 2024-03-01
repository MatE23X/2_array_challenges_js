function calcAverageHumanAge(ages){
    let humanAgeLess2 = [];
    let humanAgeAbove2 = [];

    ages.forEach(dogAge => {
        dogAge <= 2?  humanAgeLess2.push(dogAge * 2):humanAgeAbove2.push(16 + (dogAge * 4));
        humanAgeAll = [...humanAgeLess2,...humanAgeAbove2];
        const humanAgeAbove18 = humanAgeAll.filter(age => age >= 18);
        console.log(humanAgeAbove18);
    }
);
    
}

calcAverageHumanAge([5,2,4,1,15,8,3]);
//since we want the end result only, using a foreach loop is not ideal...