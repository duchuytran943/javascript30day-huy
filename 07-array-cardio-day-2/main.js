// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const now = new Date();
const thisYear = now.getFullYear();
const isHasPersonOlder19 = people.some((e) => thisYear - e.year >= 19);
console.log("isHasPersonOlder19", isHasPersonOlder19);

// Array.prototype.every() // is everyone 19 or older?
const isEveryOneOlder19 = people.every((e) => thisYear - e.year >= 19);
console.log("isEveryOneOlder19", isEveryOneOlder19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((c) => c.id === 823423);
console.log("findComment", findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
const indexComment = comments.findIndex((c) => c.id === 823423);
console.log("indexComment", indexComment);
// delete the comment with the ID of 823423
comments.splice(indexComment, 1);
console.log("comments after delete", comments);
