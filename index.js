// zadanie1

// let arr= ['a','b','c'];
// let arr2=[1,2,3];

// let arr3=arr.concat(arr2);
// console.log(arr3);

//zadanie2

// let arr= ['a','b','c'];

// let arr2= arr.concat(1,2,3);
// console.log(arr2);

//zadanie3

// let arr= [1,2,3];

// arr.reverse();
// console.log(arr);

//zadanie4

// let arr= [1,2,3,4,5];

// console.log(arr.slice(0,3));


//zadanie5

// let arr= [1,2,3,4,5];

// console.log(arr.slice(3,5));

//zadanie6

// let user={
//     js:'test',
//     jq: 'hello',
//     css: 'world'
// }

// console.log(Object.keys(user));

//zadanie7

// let arr= [1,2,3,4,5];
// arr.sort((a,b)=>b-a);
// console.log(arr);

//zadanie8

// let arr= [[1, 2, 3], [4, 5], [6]];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum +=arr[i][j];   
//     }
    
// }
// console.log(sum);

//zadanie9

// let arr= [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) { 
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sum +=arr[i][j][k];          
//         }  
//     }   
// }
// console.log(sum);

//zadanie10

let user1 = {
    name:'Sasha',
    age:25,
    password:'qwer',
    isAdmin:true,
    qwe:'zxc',
    sf:'tichka',
    zamazka:'natop8',
    wkola:'firsturok',

  }
  let user2 = {
    name:'Vasya',
    age:21,
    password:'asdf',
    isAdmin:true,
    qwe:'zxc',
    sf:'tichka',
    zamazka:'natop1',
    wkola:'firsturok',
  }

  for (const key in user1) {
    if(user1[key]==user2[key]){
      console.log(key);
    }  
    
  }