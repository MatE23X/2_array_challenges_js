function calcAverageHumanAge(ages){
    let humanAgeLess2 = [];
    let humanAgeAbove2 = [];
    for (dogAge of ages.values()){

        dogAge <= 2?  humanAgeLess2.push(dogAge * 2) : humanAgeAbove2.push(16 + (dogAge * 4));
    }
        humanAgeAll = [...humanAgeLess2,...humanAgeAbove2];
        

        // humanAgeAll.forEach(age => {
            const humanAgeAbove18 = humanAgeAll.filter(age => age >= 18);
            console.log(humanAgeAbove18);

            
        // });
        // const sumOfAges = humanAgeAbove18.reduce((accumulator,currentValue) => accumulator + currentValue,0);
       
     
            
        

   

    
       
    }



calcAverageHumanAge([5,2,4,1,15,8,3]);