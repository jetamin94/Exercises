// 4.1
const removeInvalid = (arr) => {
    removeSpecific(arr, 0)
    removeSpecific(arr, null)
    removeSpecific(arr, false)
    removeSpecific(arr, '')
    removeSpecific(arr, undefined)
    return arr
}

// 4.2
const removeSpecific = (arr, num) => {
    const index = arr.indexOf(num);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr
}

// 4.3
const getRandom = (arr) => {
    let i = Math.floor((Math.random() * arr.length))
    return arr[i]
}

// 4.4
const sumScores = (arr) => {
    let res = arr.map(a => a.scores.reduce((sum, num) => sum + num))
    return res
}

// 4.5
const inscrease10 = (arr) => {
    let res = []
    for (let val of arr) {
        val += 10
        res.push(val)
    }
    return res
}

module.exports = {
    removeInvalid,
    removeSpecific,
    getRandom,
    sumScores,
    inscrease10
}