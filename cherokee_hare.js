function hares(startingPopulation) {
    let birthRate = 0.1;
    let numberOfWeeks = 5;
  
    let cherokeeHares = startingPopulation + ((startingPopulation * birthRate) * numberOfWeeks);

    return cherokeeHares
    
}
    module.exports = hares;
    