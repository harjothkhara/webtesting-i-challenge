const enhancer = require('./enhancer.js');
// test away!

const item1 = {
    name: 'Anakin Skywalker',
    enhancement: 12, // 0 - 20
    durability: 50  // 0 - 100
};

const item2 = {
    name: 'Kylo Ren',
    enhancement: 4,
    durability: 70
};

const item3 = {
    name: 'Han Solo',
    enhancement: 20,
    durability: 100
};



describe('enhancer.js', () => {
    describe ('repair() method', () => {
        it('returns an item with the durability restored to 100', () => {
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
            // .toEqual will check properties of object not the reference in memory -> deep equality vs. toBe a strict equality (===)
        });
    })

    describe ('succeed() method', () => {
        it('returns an item with the enhancement 1 point higher, unless it is at 20, where it remains unchanged.', () => {
            expect(enhancer.succeed(item1)).toEqual({
                name: item1.name,
                enhancement: 13,
                durability: item1.durability
            });
            expect(enhancer.succeed(item2)).toEqual({
                name: item2.name,
                enhancement: 5,
                durability: item2.durability
            });
            expect(enhancer.succeed(item3)).toEqual({
                name: item3.name,
                enhancement: 20,
                durability: item3.durability
            });
        }); 
    });
    
    describe ('fail() method', () => {
        it('returns an item with durability decreasing by 5 if enhancement is less than 15, else it decreased by 10. If enhancement is greater than 16 enhancement decreases by 1.' , () => {
            expect(enhancer.fail(item1)).toEqual({ 
                name: item1.name,
                enhancement: item1.enhancement,
                durability: 45  
            });
            expect(enhancer.fail(item2)).toEqual({
                name: item2.name,
                enhancement: item2.enhancement,
                durability: 65  
            });
            expect(enhancer.fail(item3)).toEqual({
                name: item3.name,
                enhancement: 19, 
                durability: 90 
            });

        })
           
    })

})