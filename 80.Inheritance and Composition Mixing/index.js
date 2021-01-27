function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk ={
    walk: function(){
        console.log('Walking...')
    }
}

var canEat = {
    eat: function(){
        console.log('Eating...')
    }
}
var canSwim = {
    swim: function(){
        console.log('Swimming...')
    }
}
// var person = Object.assign({},canWalk, canEat)
// person.name = 'Milon'
// console.log(person)

function Person(name){
    this.name = name
}

// Object.assign(Person.prototype,canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)

var person = new Person("Milon")
console.log(person)

function GoldFish(name){
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)

var fish = new GoldFish('GoldFigh')
console.log(fish)