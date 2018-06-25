var Person = {
    firstName: 'John',
    lastName: 'Connolly',
    birthDate: new Date('1964-09-06'),
    gender: 'male',
    getAge: function() {
        var today = new Date();
        var diff = today.getTime() - this.birthDate.getTime();
        var year = 1000 * 60 * 60 * 24 * 365.25;
        return Math.floor(diff / year);
    },
    toString: function() {
        return this.firstName + ' ' + this.lastName + ' is a ' + this.getAge() +
            ' year-old ' + this.gender;
    },

    extend: function(config) {
        var tmp = Object.create(this);
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                tmp[key] = config[key];
            }
        }
        //객체가 만들어진 시간? 
        var creationTime = new Date();
        //접근자는 개별형 
        var getCreationTime = function() {
            return creationTime;
        };
        tmp.getCreationTime = getCreationTime;
        return tmp;
        console.log(getCreationTime);
    }
};

var Teacher = Person.extend({
    job: 'teacher',
    subject: 'english',
    yearExp: 5,
    toString: function() {
        var originalStr = Person.toString.call(this);
        return originalStr + ' ' + this.subject + ' teacher';
    }
});

var bob = Person.extend({
    firstName: 'bob',
    lastName: 'Sabatelli',
    birthDate: new Date('1969-09-03')
})

var Patty = Teacher.extend({
    firstName: 'Patricia',
    lastName: 'Hannon',
    subject: 'chemistry',
    yearExp: 20,
    gender: 'female'
});

console.log(Patty.toString());

console.log(Person.isPrototypeOf(bob));
console.log(Teacher.isPrototypeOf(bob));
console.log(Teacher.isPrototypeOf(Patty));
console.log(Person.isPrototypeOf(Patty));
console.log(Object.getPrototypeOf(bob));
console.log(Patty.toString());
console.log(Patty.getCreationTime());
(function() {
    console.log('iife');
}());

// 필터링 함수 
function filterForListItems(el) {
    return el.nodeName === 'SPAN';
}

var testElements = document.getElementsByTagName('span');
console.log(testElements.length);

var span = Array.prototype.filter.call(testElements, filterForListItems);
console.log(span.length);
span.innerHTML = 'Hello';