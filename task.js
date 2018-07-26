const Task = function(difficultyLevel, urgency, reward, complete){
  this.difficultyLevel = difficultyLevel;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = complete;
}

module.exports = Task;
