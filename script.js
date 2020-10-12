

// for(var i = 0;  i <= 7; i++){
//     for (var j = 0;  j <= i; j++) {
//         document.write("^")
//     }
//     document.write("<br>")
// }

// function multiply(number1, number2){
//     return (number1 * number2);
// }

// multiply(5, 2);
// alert(multiply(5, 2));

// function sorry(){
//     return mate();
// }
// function sorry(){
//     return sorry();
// }
// console.log(sorry());

const textStartMsg = "Witaj w grze: 'Dotrzyj na kurs'. Kilknij Ok aby rozpocząć";
const textLose = "Spóźniłeś się na kurs\nPRZEGRANA!"
const textChapter1 = "Budzisz się rano, co robisz? \na: Wstajesz z łóżka\nb: Śpisz dalej";
const chapter1Answer1 = "Z wielkim trudem wstałeś z łóżka";
const chapter1Answer2 = "Postanowiłeś zdrzemnąć się jeszcze chwilke, lecz obudziłeś się dopiero po 4 godzinach.";
const textChapter2 = "Musisz jakoś dotrzeć na kurs. Jaki środek transportu wybierasz?\na: samochód\nb: autobus";
const chapter2Answer1 = "Wsiadasz do samochdu i jedziesz na kurs.";
const chapter2Answer2 = "Idzisz na autobus. Czekałeś 4 godziny lecz autobus nie przyjechał.";
const textChapter3 = "Dojechałeś na miejsce. Co robisz?\na: Wchodzisz do sali.\n b: Dzwonisz do wykładowcy.";
const chapter3Answer1 = "Okazuje się, że kurs był wczoraj";
const chapter3Answer2 = "Okazuje się, że kurs był wczoraj";
// const textChapterX = "";
// const chapterXAnswer1 = "";
// const chapterXAnswer2 = "";

const startMsg = function(){
    alert(textStartMsg);
    chapter1();
}

const endMsg = function(){
    alert(textLose);
    const again = confirm("Chcesz spróbować ponownie?");
    if(again){
        startMsg();
    }else{
        alert("Dziękuję za grę");
}
}

const chapter1 = function (){
    const answer1 = prompt(textChapter1);
    if(answer1 == 'a') {
        alert(chapter1Answer1);
        chapter2();
    }else if (answer1 == 'b'){
        alert(chapter1Answer2);
        endMsg();
    } else{
        alert("Wybirz a lub b");
        chapter1()
    }
}
const chapter2 = function (){
    const answer2 = prompt(textChapter2);
    if(answer2 == 'a') {
        alert(chapter2Answer1);
        chapter3();
    }else if (answer2 == 'b'){
        alert(chapter2Answer2);
        endMsg();
    } else{
        alert("Wybirz a lub b");
        chapter2()
    }
}
const chapter3 = function (){
    const answer3 = prompt(textChapter3);
    if(answer3 == 'a') {
        alert(chapter3Answer1);
        endMsg();
    }else if (answer3 == 'b'){
        alert(chapter3Answer2);
        endMsg();
    } else{
        alert("Wybirz a lub b");
        chapter3()
    }
}

startMsg();