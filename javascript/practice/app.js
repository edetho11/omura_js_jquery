console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);



// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);



let testText;
console.log(testText); // => undefined



console.log('elephant'); // => elephant が出力される



let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);



let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);



let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加
let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);



let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);



console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);



let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);



let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(John.bloodType); // => A



let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';



let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2



function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

// 以下を追記
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});



let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);



let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');