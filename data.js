const data = [{
//   "id": "a",
//   "firstName": "Test",
//   "lastName": "Name",
//   "dob": "01-01-1991"
// },{
  "id": "b",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1969"
},{
  "id": "c",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1982"
},{
  "id": "c",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1973"
},{
  "id": "d",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1973"
},{
  "id": "e",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1982"
},{
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
  "id": "f",
  "firstName": "Test",
  "lastName": "Name",
  "dob": "01-01-1980"
}]
// const data = []

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

  if (!array.length) {
    console.log("Sorry, the Array is empty.")
    return []
  }

  const newArray = []
  array.forEach((dob) => {
    newArray.push(((today - new Date(dob).getTime())/(1000*3600*24*365)).toFixed(2)) // get the time stamp to calculate the age
  })
  return newArray
}


//Function: get the average age
const getAverageAge = (array) => {
  if (!array.length) {
    console.log("Sorry, the Array is empty. There is no average age")
    return "N/A"
  }
 
  const newArray = (array.reduce((a, b) => a + b)/ageArray.length).toFixed(2)
  return newArray
}

//Function: get the median age
const getMedianAge = (array) => {
  if (!array.length) {
    console.log("Sorry, the Array is empty. There is no median age.")
    return "N/A"
  }

  const newArray = [...array].sort()//for not changing the original array
  if(newArray.length % 2 === 0) {
    return (newArray[newArray.length/2]+newArray[newArray.length/2 - 1])/2 //if the length is even, then use the average of middle two numbers
    // return newArray[newArray.length/2 - 1] //or the first middle one
  }else{
    return newArray[parseInt(newArray.length/2)];//if odd, then use the middle one
  }
}

//Function: get the mode age
const getModeAge = (array) => {
  let ageObj = {}
  let modeAge = 0
  let modeAgeNum = 0
  if (!array.length) {
    console.log("Sorry, the Array is empty. There is no mode age.")
    return modeAge = "N/A"
  }

  array.forEach(item => {
    ageObj[item] ? ageObj[item] += 1 : ageObj[item] = 1
  })
  if (Object.keys(ageObj).length === array.length) {
    console.log("Sorry, the ages are so even that there is no mode age.")
    return modeAge = "N/A"
  } else {
    console.log(ageObj);
    for(let i in ageObj) {

      // to find the mode age
      if (ageObj[i] > modeAgeNum) {
        modeAgeNum = ageObj[i]
        modeAge = i
      }
    }

    // If the mode age is not one
    const ageObjValueArray = Object.values(ageObj)
    const maxAgeNumInAgeObj = Math.max(...ageObjValueArray)
    const numOfModeAge = ageObjValueArray.filter((item) => {
      return item === maxAgeNumInAgeObj
    })
    if (numOfModeAge.length > 1) {
      console.log("The mode age is more than one, the first mode age is: " + modeAge); 
    }
    return modeAge
  }
}

const now = new Date().getTime() //get the right now time stamp
const dobArray = getDobArray(data)
const ageArray = getAgeArray(now, dobArray).map(Number)

//Result: the average age
const averageAge = getAverageAge(ageArray)

//Result: the median age
const medianAge = getMedianAge(ageArray)

//Result: the mode age
const modeAge = getModeAge(ageArray)

//Result: json obj
const result = JSON.stringify({
  average: averageAge.toString(),
  median: medianAge.toString(),
  mode: modeAge.toString()
}) 
console.log(result);