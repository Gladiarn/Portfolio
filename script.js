
const Highest = (array) => {

    return [...new Set(array)]
}

console.log(Highest([1,5,3,8,1,1,8,2,5,123,1523,]))