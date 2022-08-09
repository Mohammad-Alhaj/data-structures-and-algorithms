'use strict';

const Node = require('./node')
const BinaryTree = require('./binaryTree')


// tree 1

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

let tree = new BinaryTree(one);
let tree2 = new BinaryTree(two);

// tree 2


 console.log(tree.root)
tree.compareFiles(tree.root,tree2.root);
