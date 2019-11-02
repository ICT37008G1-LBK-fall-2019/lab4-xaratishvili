
let names = [
    {
        id: 1,
        name: 'lev'
    },
    {
        id: 2,
        name: 'nika'
    },
    {
        id: 3,
        name: 'lev'
    }
];



function objName(obj, name) {
    let count = 0;

    for (let o of obj) {
        if (o.name === name) {
            count++
        }
    }

    return `${name} სახელის რაოდენობაა ` + count;
}

// console.log(objName(names, 'nika'));
