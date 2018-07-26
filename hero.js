const _ = require('lodash');

const Hero = function(name, favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return this.name;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.eat = function(food){
  if(food === this.favFood && food.poisoned === false){
    this.health += (food.nourishment*1.5);
  }else if (food.poisoned === false){
    this.health += food.nourishment;
  }else{
    this.health -= food.nourishment;
  }
}

Hero.prototype.orderTasks = function(criteria){
  return _.orderBy(this.tasks, criteria)
}

Hero.prototype.checkCompletion = function(criteria){
  return _.filter(this.tasks, task => task.complete === criteria)
};



module.exports = Hero;
