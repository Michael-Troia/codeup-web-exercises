
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let triLingual = users.filter(user => user.languages.length > 2);
console.log(triLingual);

let theEmails = users.map(user => user.email);
console.log(`The emails = ${theEmails}`);

let totalYears = users.reduce((total,current) => total + current.yearsOfExperience, 0);
console.log(`totalYears = ${totalYears}`);

let averageExperience = users.length/totalYears
console.log(`average experience = ${averageExperience}`)

let longest = theEmails.reduce((total, current) =>
{
    if (current.length > total.length){
        total = current
    }
    return total
}, 'a');
console.log(`The longest email: ${longest}`);

let instructors = users.reduce((accum, curr) => accum + `${curr.name} `, 'Your instructors: ');

console.log(instructors);



// let langs = users.reduce((accum, curr) => {
//
// },'')

