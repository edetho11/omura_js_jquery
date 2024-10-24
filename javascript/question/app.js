//基礎_q1
let nickname = 'omura';
let age = 27;
let SelfIntro = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。';
console.log(SelfIntro);



//基礎_q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let favLang = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(favLang);



//基礎_q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);



//基礎_q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);



//基礎_q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);


/*
function avarage() {
  let playerListAge = [];
  let playerListAgeTotal = 0;

  for(let i=0; i<playerList.length; i++) {
    playerListAge[i] = playerList[i].age;
    playerListAgeTotal = playerListAgeTotal + playerListAge[i];
  };

  return playerListAgeTotal / playerList.length;
};

console.log(avarage());
*/



//基礎_q6
function sayHello(callback) {
  console.log('Hello');
  callback();
};

sayHello(function() {
  console.log('World');
});



//基礎_q7
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log('Hello!');
}

user.sayHello();



//基礎_q8
let calc = {};

calc[0] = function add(x, y) {
  return x + y;
};

calc[1] = function subtract(x, y) {
  return x - y;
};

calc[2] = function multiply(x, y) {
  return x * y;
};

calc[3] = function divide(x, y) {
  if (y === 0) {
    return 'Math ERROR';
  }
  return x / y;
};

console.log(calc[0](1, 6));
console.log(calc[1](1, -11));
console.log(calc[2](1, 49));
console.log(calc[3](1, 0.2));



//基礎_q9
function remainder(x, y) {
  return x % y;
};

let num1 = 5;
let num2 = 3;
let soln = remainder(num1, num2);

console.log(`${num1}を${num2}で割った余りは${soln}です。`);



//基礎_q10
//foo関数内でのみ参照可能なローカル変数'x'をスコープ外で使用しているため

/*
function foo() {
  let x = 1;
}
console.log(x);
*/





//応用_q1
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(0, 9));

/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(0, 9));
*/



//応用_q2
setTimeout(() => {
  console.log('Hello World!');
}, 3000);



//応用_q3
let num = 1;

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
};



//応用_q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
};

console.log(numbers);



//応用_q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {

  if (typeof mixed[i] === 'number') {

    if (mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }

  } else {
    console.log('not number');
  };
};


