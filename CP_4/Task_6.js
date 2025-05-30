let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
]


function addUser(name, lastname, age) {
    let newId = users.length + 1;
    users.push({
        id: newId,
        name: name,
        lastname: lastname,
        age: age
    });
}

function updateUser(id, name, lastname, age) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users[i].name = name;
            users[i].lastname = lastname;
            users[i].age = age;
            break;
        }
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

addUser("Sally", "Watter", 100);
updateUser(1, "Alex", "Wilyam", 21);
deleteUser(2);

console.log(users);
