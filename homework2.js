// Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
// Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only
// Given the array, implement a function to calculate the total value of the items.

const itemObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

// Q1-1. Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
console.log(
    "----------------------------Question #1-1----------------------------------"
);

newValue = itemObject.map(doubleValue);
console.log(newValue);

function doubleValue(item) {
    const result = [];
    return {
        quantity: item.quantity * 2,
        price: item.price * 2,
    };
}

// Q1-2
console.log(
    "----------------------------Question #1-2----------------------------------"
);

result = itemObject.map(filterValue);
console.log(result);

function filterValue(items) {
    var result = [];
    return [items.quantity * 2, items.price * 2];
}

// Q1-3 Given the array, implement a
// function to calculate the total value of the items.
console.log(
    "----------------------------Question #1-3----------------------------------"
);

function totalVal(items) {
    let total = 0;
    items.map(({ quantity, price }) => {
        total += quantity * price;
    });
    return total;
}

console.log("Q1-3: total_value=", totalVal(itemObject));

// total = itemObject.map(totalValue);
// console.log(total);
// var sum = 0;
// for (var i = 0; i < total.length; i++) {
//     sum += total[i];
//     return console.log(sum);
// }

// Q2
// Given the string, implement a function to remove all the non-alphabet characters and extra space
// in the string and convert the string to all lowercase.

console.log(
    "----------------------------Question #2----------------------------------"
);
const string =
    "Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array";
const str1 = string
    .replace(/[^\w\s]/gi, " ")
    .replace(/  +/g, " ")
    .toLocaleLowerCase();
console.log(str1);
console.log(
    "--------------------------Question #3------------------------------------"
);

// Q3:Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property,
// fill with null. Sort according to uuid after merge.
const first = [
    { uuid: 2, name: "test" },
    { uuid: 5, name: "test5" },
    { uuid: 3, name: "test3" },
];
const second = [
    { uuid: 6, role: "pm" },
    { uuid: 4, role: "engineer" },
    { uuid: 1, role: "manager" },
    { uuid: 2, role: "associate" },
];

const mergeArrays = (arr1 = [], arr2 = []) => {
    let res = [];
    res = arr1.map((obj) => {
        const index = arr2.findIndex((el) => el["uuid"] == obj["uuid"]);
        const { role } = index !== -1 ? arr2[index] : {};
        return {
            ...obj,
            role,
        };
    });
    return res;
};

console.log(mergeArrays(first, second));