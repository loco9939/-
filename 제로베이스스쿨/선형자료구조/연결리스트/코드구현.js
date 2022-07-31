// Node() : data, point 를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}
// LinkedList() : head, length를 가진 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// inEmpty() : 연결 리스트 내 노드 존재 여부
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

let ll = new LinkedList();
// console.log(ll);

ll.head = new Node("abc");
ll.length++;
console.log(ll);

ll.head.next = new Node("efg");
ll.length++;
console.log(ll);

// ll.append("ABC");
// ll.append("DEF");
// ll.append("GHI");
ll.printNode();
// console.log(ll);
console.log(ll.size());
