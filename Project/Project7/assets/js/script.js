var guessAns = ""; //宣告變數var，裡面要放字串
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandom(1, 100));
//floor無條件捨去
// for (let i = 0; i < 100; i++) {
//     process.stdout.write(getRandom(0, 9) + ', ');
// }

document.querySelector(".btn-start").addEventListener("click", gameStart);
//我將gameStar交給click處理（指派這個function）（委派不用加()）
document.querySelector(".btn-guess").addEventListener("click", userGuess);
document.querySelector(".btn-show-ans").addEventListener("click", showAns);
var myhtml = document.querySelector("html");
myhtml.addEventListener("keydown", (e) => {
    //Enter的值為13
    if (e.which == 13) {
        userGuess();
    }
}); //整個BODY都可輸數字，不只框框內
function userGuess() {
    var user_guess = document.querySelector(".user-guess-input");
    //等於輸入框
    if (user_guess.value.length < 4) {
        //~user_guess.value == ''輸入內容等於0
        return;
    } //輸入數字小於0會跳出
    var A = 0;
    var B = 0;
    for (var i = 0; i < guessAns.length; i++) {
        for (var j = 0; j < user_guess.value.length; j++) {
            if (i == j && guessAns[i] == user_guess.value[j]) {
                A++;
            } else if (guessAns[i] == user_guess.value[j]) {
                B++;
            }
        }
    }
    //將user-guess-input取出(value)放入userguess中
    document.querySelector(
        ".user-guess-history"
    ).innerHTML += `${user_guess.value}:${A}A${B}B</br>`; //更新
    //userguess值放入user-guess-history

    user_guess.value = "";
}

function gameStart() {
    let set = new Set(); //宣告新Set放入變數let中

    // set.add(999);  //set加入add()之內的數字，不會重複加入

    //取四位不重複數字
    while (set.size < 4) {
        var random_num = getRandom(0, 9);
        set.add(random_num);
    }
    //把字串加起來
    guessAns = ""; //空盒子清空
    //set大,item小,set有四個數，item將它取出
    for (var item of set) {
        guessAns = guessAns + item;
        // mystr+=item;
    }
}
function showAns() {
    document.querySelector(".guessAns").innerText = guessAns;
}

function gameStart2() {
    console.log("Hello");
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //宣告0-9的陣列
    console.log(array);
    var rndIndex; //宣告亂數索引值
    var temp; //宣告暫存區
    for (let i = 0; i < array.length; i++) {
        rndIndex = getRandom(0, 9); //取亂數0-9，放入亂數索引值
        //array[i]與其他人隨機交換，打散，
        temp = array[i]; //temp暫存
        array[i] = array[rndIndex]; //rndIndex=7複寫array[0]，array[0]=7
        array[rndIndex] = temp; //rndIndex=7複寫0
        console.log(array);
    }
    array.length = 4; //把array截短4個，只要四個，js特有寫法
    //return array，給funtion之外的人看
    document.querySelector(".guessAns").innerText = array; //把array顯示給使用者看，js特有寫法
}

let user_guess_input = document.querySelector(".user-guess-input"); //.user-guess-input是html語法
user_guess_input.addEventListener("input", (e) => {
    var user_guess = user_guess_input.value; //輸入框的內容
    var previous_user_guess = user_guess.substring(0, user_guess.length - 1); //房間內的人
    if (previous_user_guess.includes(e.data) == true) {
        //先做房內做判斷
        user_guess_input.value = previous_user_guess; //slice/substring抓子字串
        //alert(user_gues)
    }

    // logMessage(`Key "${e.data}" input  [event: input]`);
    //alert(1)
});

user_guess_input.addEventListener("keydown", (e) => {
    //Enter的值為13
    if (e.which == 13) {
        userGuess();
    }
    //logMessage(`Key "${e.key}" pressed  [event: keydown] ${e.which}`);
    //else logMessage(`Key "${e.key}" repeating  [event: keydown]`);
});
