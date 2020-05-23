export const letters = 'ABCDEFG'.split('')
export const numbers = [...Array(7).keys()];


let allCoordinatesSetup = []
for(let letter_index = 0; letter_index < letters.length; letter_index++){
  for(let number_index = 0; number_index < numbers.length; number_index++){
    allCoordinatesSetup.push(letters[letter_index]+(numbers[number_index]+1).toString())
  }
}

export const allCoordinates = allCoordinatesSetup