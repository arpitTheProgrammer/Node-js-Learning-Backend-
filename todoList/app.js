import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];
const showMenu = () => {
    console.log("\n1: Add a Task")
    console.log("2: View a Task")
    console.log("3: Exit")
    rl.question("Choose an Option ", handleInput)
}

const handleInput =(option) => {
    if(option === "1"){
        rl.question("Enter the task ", (task) => {
            todos.push(task)
            console.log("Task added ", task)
            showMenu()
        })
    }
    else if(option === "2"){
            console.log("\n Your Tasks")
            todos.forEach((tasks, index)=> {
                console.log(`${index+1}. ${tasks}`)
            })
            showMenu()
    }
    else if( option === "3"){
        console.log("GOOD BYE..")
        rl.close()
    } else {
        console.log("Invalid Option")
        showMenu()
    }
}
showMenu()