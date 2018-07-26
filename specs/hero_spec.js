const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food');
const Rat = require('../rat')

describe("Hero", function(){

  let hero;
  let task1, task2, task3, task4, task5;
  let meat;
  let broccoli;
  let rat;

  beforeEach(function(){
    meat = new Food('meat', 50);
    broccoli = new Food('broccoli', 5);
    hero = new Hero('Joe', meat);
    task1 = new Task(5, 9, "jewels", true);
    task2 = new Task(6, 8, "diamonds", true);
    task3 = new Task(2, 6, "gold", false);
    task4 = new Task(9, 3, "silver", false);
    task5 = new Task(7, 2, "rubys", false);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    hero.addTask(task5);
    rat = new Rat();
  })

  it("should be able to talk", function(){
    let expected = "Joe";
    let actual = hero.talk();
    assert.strictEqual(actual, expected);
  });

  it("should be able to take in a task", function(){
    let expected = [task];
    let actual = hero.tasks;
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to eat", function(){
    hero.eat(broccoli);
    let expected = 105;
    let actual = hero.health;
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to eat fav food", function(){
    hero.eat(meat);
    let expected = 175;
    let actual = hero.health;
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to sort tasks by difficulty", function(){
    let expected = [task3, task1, task2, task5, task4];
    let actual = hero.orderTasks("difficultyLevel");
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to sort tasks by urgency", function(){
    let expected = [task5, task4, task3, task2, task1];
    let actual = hero.orderTasks("urgency");
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to sort tasks by reward", function(){
    let expected = [task2, task3, task1, task5, task4];
    let actual = hero.orderTasks("reward");
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to view complete or incomplete tasks", function(){
    let expected = 3;
    let actual = hero.checkCompletion(false).length;
    assert.deepStrictEqual(actual, expected);
  });

  it("rat can touch and poison food", function(){
    rat.touchFood(broccoli);
    let expected = true;
    let actual = broccoli.poisoned;
    assert.deepStrictEqual(actual, expected);
  });

  it("hero can be poisoned", function(){
    rat.touchFood(broccoli);
    hero.eat(broccoli);
    let expected = 95;
    let actual = hero.health;
    assert.deepStrictEqual(actual, expected);
  });



});
