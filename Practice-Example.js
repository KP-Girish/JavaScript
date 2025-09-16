let markes = 25;
let grade;
if (markes >= 80 && markes <= 100){
   grade = "A";
}else if(markes >= 70 && markes <= 89){
    grade = "B";
}else if(markes >= 60 && markes <= 69){
    grade = "C";
}else if(markes >=50 && markes <=59){
    grade = "D";
}else if(markes >=0 && markes <=49){
    grade = "F";
}

console.log("Grade: " + grade);