const fs = require("fs")

fs.writeFile("employees.json", `{"name": "Employee 1 Name", "salary": 2000}`, "utf8", err => {
    if (err) {
        console.log("HATA : ", err);
    }
    console.log("CREATE");

})

fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) {
        console.log("HATA : ", err);
    }
    console.log("READ");
})
setTimeout(() => {

    fs.appendFile("employees.json", '\n{"name": "Employee 2 Name", "salary": 3000}', "utf-8", (err) => {
        if (err) {
            console.log("HATA : ", err);
        }
        console.log("UPDATE");
    })
}, 10000);


setTimeout(() => {

    fs.unlink('employees.json', (err) => {
        if (err) {
            console.log("HATA : ", err);
        }
        console.log("DELETE");
    })
}, 20000);
