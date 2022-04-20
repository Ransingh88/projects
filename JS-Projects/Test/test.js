// // process.stdin.resume();
// // process.stdin.setEncoding('utf8');
// // let read = ''
// // process.stdin.on("data",function(input){
// // 	read+=input
// // })
// // process.stdin.on("end",function(){
// // 	read=read.replace(/\n$/,"")
// // 	runProgram(read)
// // })
// // process.on("SIGINT",function(){
// // 	read = read.replace(/\n$/,"")
// // 	runProgram(read)
// // 	process.exit(0)
// // })

// // function runProgram(input){

// //     function nfibo(input){
// //         let newInput = input.split('\n')
// //         let dd = newInput[0].split(' ').map(Number)
// //         let n = dd[0]
// //         let k = dd[1]
// //         let arr = newInput[1].split(' ').map(Number)
// //         let resArr = [...arr]
// //         let a = arr[0]
// //         let b = arr[1]
    
// //         for(let i=0;i<k-n;i++){
// //             resArr.push(resArr[resArr.length-1] + resArr[resArr.length-2])
// //         }
        
// //         let res = resArr[resArr.length-1]
// //         return res%(10^9+7)
    
// //     }
// //     let result = nfibo(input)
// // 	console.log(result)

// // }


// let arr = [-11,-2,19,37,64,-18]
// let k = 3
// let n = 6
// function check(arr,n,k){
//     let resArr = []
//     let vegan = []

//     for(let i=0;i<n;i++){
//         if(arr[i]<0){
//             resArr.push(arr[i])
//         }
//         if(arr[i]>0){
//             vegan.push(arr[i])
//         }
//         if(vegan.length = k){
//             resArr.push(0)
//         }
//     }
//     console.log(resArr)

// }
// check(arr,n,k)
