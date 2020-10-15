marks = prompt("What is your marks");

if (marks>=80){
    console.log("Grade A");
    if (marks>90){
        console.log("Reward $100");
    } else {
        console.log("Reward $50");
    }
} else {
    console.log("Failed");
}