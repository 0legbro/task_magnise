var family = [
    {
        name: "Mike",
        age: 10
    },
    {
        name: "Matt",
        age: 13
    },
    {
        name: "Nancy",
        age: 15
    },
    {
        name: "Adam",
        age: 22
    },
    {
        name: "Jenny",
        age: 85
    },
    {
        name: "Nancy",
        age: 2
    },
    {
        name: "Carl",
        age: 40
    }
];

function printUniqueResults (arrayOfObj, key) {
    return arrayOfObj.filter((item, index, array) => {
        return array.map((mapItem) => mapItem[key]).indexOf(item[key]) === index
    })
}
alert(printUniqueResults())