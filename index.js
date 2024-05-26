import inquire from "inquirer";
let myBalance = 20000;
let pin = 12334;
console.log("Your balance is:", myBalance);
const answer = await inquire.prompt([
    {
        name: "Pin",
        message: "Enter your pin number",
        type: "number",
    },
]);
if (answer.Pin === pin) {
    console.log("You have typed the correct pin");
    let operation = await inquire.prompt([
        {
            name: "choice",
            message: "What would you to:",
            type: "list",
            choices: ["Withdraw", "check balance", "deposit"],
        },
    ]);
    if (operation.choice === "Withdraw") {
        console.log(operation);
        let amount = await inquire.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount:",
            },
        ]);
        if (amount.amount <= myBalance) {
            console.log("your remaining balance is:", myBalance - amount.amount);
        }
        else {
            console.log("you don't have enough money");
        }
    }
    if (operation.choice === "check balance") {
        console.log(operation);
        console.log("Your balance is:", myBalance);
    }
    else if (operation.choice === "deposit") {
        console.log(operation);
        let amount = await inquire.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount:",
            },
        ]);
        if (amount.amount) {
            console.log("Now your total balance is:", amount.amount + myBalance);
        }
    }
}
else {
    console.log("you have not type the correct pin");
}
