const name = "Osugi";
const hobby = "coding";

const message = `${name} likes ${hobby}.`;

console.log(message);

const me = {
    name:"Ayaka",
    grade: 4
    };

function makeBasicInfo(person) {
    return `${person.name} is in grade ${person.grade}.`;
}

console.log(makeBasicInfo(me));

const me = {
    name: "Momoko",
    interests: ["planting", "agriculture", "charing"]
};
function makeInterestList(person) {
  return person.interests.join(" / ");
}

console.log(makeInterestList(me));

