const arr = [
    '1 nivel',
    ['2 nivel', 42, true],
    [
    ['3 nivel, 1 item', 'Ola, mundo'],
    ['3 nivel, 2 item', 'Ola, mundo'],
    ],
    []
]


const test = [
    'Brenno', 'Karol', 'Vitoria'
]


console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][1])

console.table(arr)

for(let i = 0; i < test.length; i++){
    for(let j = 0; j < test[i].length; j++){
        const element = test[i][j]
        console.log(element)
        
    }
    console.log(test[i])
}