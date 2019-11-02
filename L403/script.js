let people = [
    {
        id: 1,
        name: 'frank'
    },
    {
        id: 2,
        name: 'lev'
    },
    {
        id: 3,
        name: 'lev'
    },
    {
        id: 4,
        name: 'giorgi'
    }
];

function names(obj) {
    let setNames = [];
    for (let o of obj) {
        setNames.push(o.name);
    }

    return new Set(setNames);
}

console.log(names(people));
