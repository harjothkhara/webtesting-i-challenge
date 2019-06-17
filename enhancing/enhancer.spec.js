const enhancer = require('./enhancer.js');
// test away!

const item1 = {
    name: 'item 1',
    enhancement: 12,
    durability: 50
};

const item2 = {
    name: 'item 2',
    enhancement: 18,
    durability: 70
};

const item3 = {
    name: 'item 3',
    enhancement: 4,
    durability: 100
};



describe('enhancer.js', () => {
    describe ('repair() method', () => {
        it('accepts an item object and returns a new item with durability restored to 100', () => {
            // setup
            const expected = { // what we want happen
                name: item1.name,
                enhancement: item1.enhancement,
                durability: 100
            };
            // run system under test
            const result = enhancer.repair(item1);
            // verify it works
            expect(result).toEqual(expected)
            // .toEqual will check properties of object not the reference in memory. 
        })
    })
})