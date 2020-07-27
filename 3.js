var nama = "Rhodey";
var tb = 1.7;
var bb = 90; 

var totalBmi = tb ** tb / bb ;

if (totalBmi >= 30.0){
    console.log( nama ,"memiliki status BMI" ,"Kegemukan (Obesitas)");
} else if (totalBmi <= 25.0 && totalBmi >= 29.9){
    console.log( nama ,"memiliki status BMI" , "Kelebihan berat badan");
} else if (totalBmi <= 18.5 && totalBmi >= 24.9){
    console.log( nama ,"memiliki status BMI" , "Normal (Ideal)");
} else {
    console.log( nama ,"memiliki status BMI" , "Kekurangan berat badan");
};



