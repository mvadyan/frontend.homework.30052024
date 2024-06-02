///////////////// task 1 //////////////////////////

const arr1 = [197, 2, 3, 4, 5, 6, 7, 20, 9];
let evenNum = 0;
let oddNum = 0

for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] % 2 === 0) {
        evenNum += arr1[i]
    } else {
        oddNum += arr1[i]
    }
}

let diffNum = evenNum > oddNum ? evenNum - oddNum : oddNum - evenNum;

console.log(diffNum);


///////////////// task 2 //////////////////////////


arr2 = [
    {
        title: "Nike",
        price: 300,
        type: "shoes"
    },
    {
        title: "Puma",
        price: 400,
        type: "shoes"
    },
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "Chanel",
        price: 1200,
        type: "perfume"
    }
];


for (let i = 0; i < arr2.length; i++) {


    if (arr2[i].type === "shoes")
        console.log(arr2[i].title);
}


///////////////// task 3 //////////////////////////

arr3 = [];

for (let i = 0; i < arr2.length; i++) {

    if (arr2[i].price < 1000)
        arr3.push(arr2[i]);
}

console.log(arr3);