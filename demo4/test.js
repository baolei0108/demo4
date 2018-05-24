// console.log(a);
// var a=10;

//结果：undefined

// 相当于
// var a;
// console.log(a);
// a=10;

// foo();
// function foo(){
//     console.log('hello,world');
// }
//结果：hello,world


//函数变量提升，直接将整个函数提到执行环境的最顶端
//相当于
// function foo(){
//     console.log('hello,world');
// }
// foo();

// foo();  //foo is not a function
// var foo=function(){
//     console.log('bbb');
// }


//相当于
//var foo;
//foo();
//foo=function(){
//  console.log('bbb');
//}

console.log(foo);
var foo=10;
console.log(foo);
function foo(){
    console.log(10);
}
console.log(foo);



// 相当于
// function foo(){
//     console.log(10);
// }
// var foo;
// console.log(foo);
// foo=10;
// console.log(foo);
// console.log(foo);

// 总结：关于变量提升，一定要注意细心思考一下，还有就是要牢记，函数提升在变量提升之上







