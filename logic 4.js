// // const pola = (input) => {
// //     var polaNonMedian = "";
// //     var polaMedian = "";
// //     if (input % 2) {
// //         // console.log('pola')
// //         for (let i = 1; i <= input; i++) {
// //             if (i == ((input + 1) / 2)) {
// //                 for (let j = 1; j <= input; j++) {
// //                     polaMedian += "* "
// //                 }
// //                 console.log(polaMedian)
// //             } else {
// //                 for (let j = 1; j <= input; j++) {
// //                     if (j == 1) {
// //                         polaMedian += "* "
// //                     }
// //                     else if (j == input) {
// //                         polaNonMedian += "* "
// //                     }
// //                     else {
// //                         polaNonMedian += '= '
// //                     }
// //                 }
// //                 console.log(polaNonMedian)
// //                 polaNonMedian = " "
// //             }
// //         }
// //     } else {
// //         console.log('enter odd number')
// //     }
// // }

// // pola(5)

// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     console.log(arr)
//     return arr;

// }

// bubbleSort([5, 3, 8, 2, 1, 4]); // [ 1, 2, 3, 4, 5, 8 ]