function getAdmins(map) {
    for([key, value] of map) {
        let admins = [];
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Louis', 'Admin');
users.set('Stephanie', 'Admin');
users.set('George', 'User');
users.set('Nathalie', 'Admin');

console.log(getAdmins(users));