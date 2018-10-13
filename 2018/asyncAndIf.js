'use strict';

console.log('Without async:');

// Simulate a server request
function getHpFromServer(name) {
    const cars = {
        'miata':  155,
        '4c': 237,
        'elice': 217,
    };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cars[name]);
        }, 500);
    });
}

function getAllHp(cars, allHp) {
    const carCache = {}
    allHp = allHp || [];

    if (cars.length === 0) {
        return allHp;
    }

    const car = cars[0];
    if (typeof carCache[car] === 'number') {
        allHp.push(carCache[car]);
        return getAllHp(cars.slice(1), allHp);
    } else {
        return getHpFromServer(car).then((hp) => {
            allHp.push(hp);
            return getAllHp(cars.slice(1), allHp);
        });
    }
}

function run() {
    getAllHp(['miata', '4c', 'elice', 'miata']).then((allHp) => {
        console.info(allHp);
        // [155, 237, 217, 155]
        
        runPart2();
    });
}
run();

async function getAllHpWithAsync(cars) {
    const carCache = {}
    const allHp = [];

    for (let car of cars) {
        if (typeof carCache[car] === 'number') {
            allHp.push(carCache[car]);
        } else {
            allHp.push(await getHpFromServer(car));
        }
    }

    return allHp;
}

async function runPart2() {
    console.log('With async:');

    const allHp = await getAllHpWithAsync(['miata', '4c', 'elice', 'miata']);
    console.info(allHp);
    // [155, 237, 217, 155]
}