const fs = require('fs');
const {
    findById, 
    filterByQuery, 
    createNewZookeeper, 
    validateZookeeper,
} = require('../lib/zookeepers.js');
const {zookeepers} = require('../data/zookeepers.json');


jest.mock('fs');

test ("creates a zookeeper", ()=> {
    const zookeeper = createNewZookeeper(
        {name: "Emily", id: "hui"},
        zookeepers);

    expect(zookeeper.name).toBe("Emily");
    expect(zookeeper.id).toBe("hui");

}
);

test ("validate zookeeper", ()=> {
    const zookeeperOne = {
        name: "Josh",
        age: "22",
        favoriteAnimal: "cat"

    };

    const zookeeperTwo = {
        name: "Aubrey",
        age: "26"

    };

    const result=validateZookeeper(zookeeperOne);
    const resultTwo = validateZookeeper(zookeeperTwo);

    expect(result).toBe(true);
    expect(resultTwo).toBe(false);

}
);

test ("finds zookeeper by ID", ()=> {
    const startingZookeepers = [
        {
            id: "8",
            name: "Lernantino",
            age: 19,
            favoriteAnimal: "Business Cat",
            },
            {
            name: "Les",
            age: 64,
            favoriteAnimal: "Rabbit",
            id: "9",
            },
    ];

    const result = findById("9", startingZookeepers);

    expect(result.name).toBe("Les");

}
);

test ("filters by favorite animal", ()=> {
const startingZookeepers = [
    {
        id: "10",
        name: "Emmilu",
        age: 28,
        favoriteAnimal: "Duckbilled Platypus",
    },
    {
        id: "70",
        name: "Emy",
        age: 29,
        favoriteAnimal: "Cat",
    }
]

const updatedZookepers = filterByQuery({ favoriteAnimal: "Cat"}, startingZookeepers);
expect(updatedZookeepers.length).toEqual(1);
}
);
