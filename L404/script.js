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

function sumNames (obj) {
   let myObj = {};

   obj.forEach((item) => {
       if (!myObj[item.name]) {
           myObj[item.name] = 0
       }
       myObj[item.name] += 1;
   });
   return myObj;
}

console.log(sumNames(people));
