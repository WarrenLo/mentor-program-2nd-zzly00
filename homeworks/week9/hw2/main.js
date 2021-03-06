// 舊寫法
/*
function Stack(){
    const list = [];
    return {
        push: (n) => {
            const index = list.length || 0;
            list[index] = n;
        },
        pop: () => {
            const num = list[list.length-1];
            list.splice(list.length-1, 1);
            return num;
        }
    }
}
function Queue(){
    let list = [];
    return {
        push: (n) => {
            const index = list.length || 0;
            list[index] = n;
        },
        pop: () => {
            const [num, ...rest] = list;
            list = rest;
            return num;
        }
    }
}
*/

// 物件導向
function Stack(){
    this.list = [];
}
Stack.prototype.push = function(n){
    const index = this.list.length || 0;
    this.list[index] = n;
}
Stack.prototype.pop = function(){
    const num = this.list[this.list.length-1];
    this.list.splice(this.list.length-1, 1);
    return num;
}

function Queue(){
    this.list = [];
}
Queue.prototype.push = function(n){
    const index = this.list.length || 0;
    this.list[index] = n;
}
Queue.prototype.pop = function(){
    const [num, ...rest] = this.list;
    this.list = rest;
    return num;
}

// first in, last out
const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

// first in, first out
const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2