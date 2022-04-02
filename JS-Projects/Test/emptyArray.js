let list = ['a','b','c','d']

console.log('Before Empty',list)

list = []
console.log('After Empty',list)

// or

while(list.length != 0){
    list.pop()
}

console.log('After Empty',list)