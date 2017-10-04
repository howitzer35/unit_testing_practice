function doesExist(letter, word) {
    let counter = 0
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) counter++
    }
    return counter
  }

    module.exports = doesExist;
