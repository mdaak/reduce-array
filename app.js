const nums = [12,25,36,98,74,100,3,6,9,5];
nums.map(num=>num*2);
const num1=nums.filter(num=> num>20);
// console.log( num1);
nums.find(num=>num>25);


// const total = nums.reduce((sum, num) => {
//     console.log(sum, num);
//     return sum + num;
  
    
// } , 0) ;
// console.log(total);



friends = [
    {name:'jon', age:25},
    {name:'jal', age:225},
    {name:'jla', age:235},
    {name:'jkl', age:275},
    {name:'jol', age:265},
];

const totalAge = friends.reduce((sum, friend)=> sum + friend.age,0);
console.log(totalAge);

                                                   