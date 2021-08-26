// const height = document.getElementById("height").value;
//     const weight = document.getElementById("weight").value;
//     const BMI = weight/(height*height);
//     const out = BMI.toString();


function calculateBmi(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const BMI = weight/(height*height);
    const out = BMI.toString();

    document.getElementById("output").innerHTML = out;
}