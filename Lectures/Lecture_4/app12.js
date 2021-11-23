var person = {
    firstName: "John",
    lastName : "Doe",
    id: 5566,
    
    fullName: function(name) {
       this.lastName=name;
    },

    toString: function(){
        return `${this.firstName} ${this.lastName} ${this.id}`;
    }
};

document.getElementById("demo").innerHTML = person.toString();