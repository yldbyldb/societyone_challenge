const data = [{
  "id": "a",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1991"
},{
  "id": "b",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1962"
},{
  "id": "c",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1973"
},{
  "id": "d",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1994"
},{
  "id": "e",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1982"
},{
  "id": "f",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1982"
}]
//Function: collect the dob from data
const getDobArray = ( array ) => {
  const newArray = []
  array.forEach((people) => {
    newArray.push(people.dob)
  })
  return newArray
}

//Function: convert to age array
const getAgeArray = ( today, array ) => {
  const newArray = []
  array.forEach((dob) => {
    newArray.push(((today - new Date(dob).getTime())/(1000*3600*24*365)).toFixed(2)) // get the time stamp to calculate the age
  })
  return newArray
}

//Function: get the median age
const getMedianAge = (array) => {
  const newArray = [...array].sort()
  if(newArray.length % 2 === 0) {
    return (newArray[newArray.length/2]+newArray[newArray.length/2-1])/2 //if the length is even, then use the average of middle two numbers
  }else{
    return newArray[parseInt(newArray.length/2)];//if odd, then use the middle one
  }
}

//Function: get the mode age
const getModeAge = (array) => {
  let age
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (count === 0) {
      age = array[i]
      count++
    }else{
      if (age !== array[i]) {
        count--
      }else{
        count++
      }
    }
  }
  return age
}

const now = new Date().getTime() //get the right now time stamp
const dobArray = getDobArray(data)
const ageArray = getAgeArray(now, dobArray).map(Number)

//Result: the average age
const averageAge = (ageArray.reduce((a, b) => a + b)/ageArray.length).toFixed(2)
//Result: the median age
const medianAge = getMedianAge(ageArray)
//Result: the mode age
const modeAge = getModeAge(ageArray)

console.log(ageArray);
const result = JSON.stringify({
  average: averageAge.toString(),
  median: medianAge.toString(),
  mode: modeAge.toString()
}) 
console.log(result);