// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((ele) => ele.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(callback, children) {
        if (typeof children === 'undefined') {
            callback(this.root);
            children = this.root.children;
        }


        if (!children || children.length === 0) return;

        children.forEach((element) => {
            callback(element);
        });

        children.forEach((element) => {
            this.traverseBF(callback, element.children);
        });
    }

    traverseDF(callback, children) {
        if (typeof children === 'undefined') {
            callback(this.root);
            children = this.root.children;
        }


        if (!children || children.length === 0) return;

        children.forEach((element) => {
            callback(element);
            this.traverseDF(callback, element.children);
        });
    }
}

module.exports = {
    Tree,
    Node
};