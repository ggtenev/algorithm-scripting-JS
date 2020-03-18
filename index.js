// Fibonacci Series 

const fibo = (arr, n) => {
  for (let i = 0; i <= n; i++) {
    let sequence = 0
    sequence += arr[i] + arr[i + 1]
    arr.push(sequence)
  }
  return arr
}

//Valid Anagram

function validAnagram(str1, str2) {
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  if (arr1.length !== arr2.length) return false

  let o = {}
  for (let i of arr1) {
    o[i] ? o[i]++ : o[i] = 1
  }
  for (let i of arr2) {
    if (o[i]) {
      o[i]--
    }
  }
  for (let key in o) {
    if (o[key] !== 0) return false
  }
  return true
}

//Count unique Values in an array

function countUniqueValues(arr) {
  let first = 0
  let second = 1
  while (second <= arr.length) {
    if (arr[first] === arr[second]) second++
    else {
      first++
      arr[first] = arr[second]
      second++
    }
  }
  return first
}

// Given two positive integers , find out if the two numbers have the same frequency 
//of digits

function sameFrequency(int1, int2) {
  let a1 = int1.toString().split('')
  let a2 = int2.toString().split('')
  let o = {}

  if (a1.length !== a2.length) return false
  for (let i = 0; i < a1.length - 1; i++) {
    o[a1[i]] = o[a1[i]] + 1 || 1
  }
  for (let i of a2) {
    if (o[i]) {
      o[i]--
    }
  }
  for (let key in o) {
    if (o[key] !== 0) return false
  }
  return true
}

//Given a sorted array of integers and a target average, determine if there is a pair of values
//where the average of the pair  equals the target average

function averagePair(arr,avrg){
  let start = arr[0]
  let end = arr[arr.length - 1]
  let i = 1;
  while(start !== end){
    if((start + end) / 2 == avrg) return true
    else if((start + end) / 2 > avrg) end = arr[arr.length - 1 - i]
    else start = arr[i]
    i++
  }
  return false
}
