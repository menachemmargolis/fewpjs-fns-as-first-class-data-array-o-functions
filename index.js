function wakeDog(dogName, dogBreed){
    console.log(`wake ${dogName} the ${dogBreed}`)
}

function leashDog(dogName, dogBreed){
    console.log(`leash ${dogName} the ${dogBreed}`)
}


function walkToPark(dogName, dogBreed){
    console.log(`walk to park  ${dogName} the ${dogBreed}`)
}

function throwFrisbee(dogName, dogBreed){
    console.log(`play freezby with ${dogName} the ${dogBreed}`)
}

function walkHome (dogName, dogBreed){
    console.log(`walk home ${dogName} the ${dogBreed}`)
}

function unleashDog(dogName, dogBreed){
    console.log(`unleash ${dogName} the ${dogBreed}`)
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    routine.forEach(function(exersise){
     exersise(dogName, dogBreed)
    })
}

exerciseDog("bobby", "hound")
