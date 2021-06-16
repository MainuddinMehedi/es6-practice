const person = {name: 'Jack William', age:17, job: 'facebook', gfName:'Emma Watson', address: 'Kochu Khet', phone:'01755412212', friends: ['Tom Hanks', 'Tom Crouse', 'Kabila']}

const {phone, gfName, address} = person

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Leader',
    }
}


const {leader} = complexObject.info
console.log(leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address);
// console.log(gfName, phone, address);

// const friends = ['Sakib Khan', 'Salman Khan', 'Jagir Khan'];
// const [chotoFriend, ...restFirend] = friends;
// console.log(chotoFriend, restFirend);
