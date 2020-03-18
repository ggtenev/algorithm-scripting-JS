const fibo = (arr,n) => {
  for(let i = 0; i <=n; i++){
    let sequence = 0
    sequence +=arr[i] + arr[i+1]
    arr.push(sequence)
  }
  return arr
}

console.log(fibo([1,2],66))