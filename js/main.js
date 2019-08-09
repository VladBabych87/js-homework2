var userObj = {
    firstName: 'Vlad',
    lastName: 'Babych',
    age: 22,
    fullName(){
        return '${userObj.firstName} ${userObj.lastName}';
    }
};
console.log(userObj);

console.log(userObj.fullName());


function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
  }
console.log(defUpperStr('My text'));
console.log(defUpperStr());


function evenFn(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);
  return arr;
  }
console.log(evenFn(10));
console.log(evenFn(15)); 
console.log(evenFn(20)); 
  