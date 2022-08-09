const messages = [
    "Oscar",
    "Carlos",
    "Diego",
    "Jessica",
    "Laura",
    "Pedro"
];

const randomMsg = ()=>{
    const message = messages[Math.floor(Math.random()* messages.length)]//para garantizar del numero de los elementos que tengo en este arreglo

    console.log(message);
};

module.exports = {randomMsg};