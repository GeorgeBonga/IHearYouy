
const profile = [
    {
        source: require('../img/user5.jpg'),
        image :  require('../img/2.jpg'),
        name: 'Bob the Singer',
        online: true,
    },
    {
        source: require('../img/user1.jpg'),
        image :  require('../img/5.jpg'),
        name: 'Cookie Monster',
        online: true,
    },
    {
        source: require('../img/user2.jpg'),
        image :  require('../img/3.jpg'),
        name: 'Elmo Producer',
        online: false,
    }
];

const images = {
    '1': require('../img/1.jpg'),
    '2': require('../img/2.jpg'),
    '3': require('../img/3.jpg'),
    '4': require('../img/4.jpg'),
    '5': require('../img/5.jpg')
};

export function randomProfile() {
    var random = Math.floor((Math.random() * profile.length));

    return profile[random];
}

export function getImage(index) {
    return images[index];
}