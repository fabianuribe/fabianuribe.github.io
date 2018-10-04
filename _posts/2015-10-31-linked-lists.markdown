---
layout: post
title: "Data Structures in Javascript: Linked Lists"
description: "One of the most basic data structures in computer science, with a simple implementation yielding great time and space complexity for a set of operations."
date: 2015-11-07 14:00:00
category: blog
tags: [Computer-Science, Data-Structures, Javascript]
---

A *Linked List* is a sequence of nodes, it can be single linked or double linked. Nodes on a single linked lists have a reference to their successor, on doubly linked lists each node also has a reference to their predecessor.

### The implementation

To make the basic operations simpler, every instance of the *Doubly Linked List* will hold a reference to the first and last elements in the list, it will also keep track of the number of nodes it holds.

The linked list will implement the following basic operations :

- Insert (Append/Prepend)
- Delete
- Search
- String representation

<!-- {% gist fabianuribe/cf4f9af85e10521063ed linked-list.js %} -->

{% highlight javascript %}
/**
 * linked-list.js
 * A module that implements a Doubly Linked List data Structure
 * @module LinkedList
 */
module.exports = LinkedList;

/**
 * Represents a Linked List Node.
 * @param {Object} data
 * @constructor
 */
function LinkedListNode (data) {
    this.successor = null;
    this.predecessor = null;
    this.data = data;
}

/**
 * Represents a Linked List.
 * @constructor
 */
function LinkedList () {
    this.size = 0;
    this.first = null;
    this.last = null;
}

LinkedList.prototype = {
    /**
     * Inserts an elment at the end of the list.
     * @param {...Object} element
     */
    append: function (element) {
        var linkedListNode;
        var i;

        for (i = 0; i < arguments.length; i += 1) {
            linkedListNode = new LinkedListNode(arguments[i]);

            if (this.size === 0) {
                this.first = linkedListNode;
                this.last = linkedListNode;
            } else {
                this._link(this.last, linkedListNode);
                this.last = linkedListNode;
            }
            this.size += 1;
        }
    },

    /**
     * Inserts an elment at the begining of the list.
     * @param {...Object} element
     */
    prepend: function (element) {
        var linkedListNode;
        var i;

        for (i = 0; i < arguments.length; i += 1) {
            linkedListNode = new LinkedListNode(arguments[i]);

            if (this.size === 0) {
                this.first = linkedListNode;
                this.last = linkedListNode;
            } else {
                this._link(linkedListNode, this.first);
                this.first = linkedListNode;
            }
            this.size += 1;
        }
    },

    /**
     * Removes a node from the linked list.
     * @param {LinkedListNode} node
     */
    remove: function (node) {
        if(!node.hasOwnProperty('data') ||
           !node.hasOwnProperty('predecessor') ||
           !node.hasOwnProperty('successor')) {
            throw('Not a LinkedListNode');
        }
        if (this.first === node) {
            this.first = node.successor;
        }
        if (this.last === node) {
            this.last = node.predecessor;
        }
        this._link(node.predecessor, node.successor);
        this.size -= 1;
        return node;
    },

    /**
     * Finds a node Object based on its 'data' key.
     * @param {Object} data
     * @return {LinkedListNode|Number} The first LinkedListNode containing the data value or -1 if not present.
     */
    search: function (data) {
        var currentNode = this.first;
        while (currentNode.data !== data && currentNode.successor) {
            currentNode = currentNode.successor;
        }
        if (currentNode.data === data ) {
            return currentNode;
        } else {
            return -1;
        }
    },

    /**
     * Returns a string valued representation of the object.
     * @return {String}
     */
    toString: function () {
        var node = this.first;
        var separator = ',';
        var string = '';

        if (!node) {
            return string;
        }
        while (node.successor) {
            string += node.data.toString() + separator;
            node = node.successor;
        }
        return string + node.data.toString();
    },

    isEmpty: function () {
        return this.size === 0;
    },

    /**
     * Links two LinkedListNodes
     * @access private
     * @param {LinkedListNode} predecessor
     * @param {LinkedListNode} successor
     */
    _link: function (predecessor, successor) {
        if (predecessor) {
            predecessor.successor = successor;
        }
        if (successor) {
            successor.predecessor = predecessor;
        }
    }
};
{% endhighlight %}


The complete source code for data structure's including the unit tests for this implementation are included [here](https://gist.github.com/fabianuribe/cf4f9af85e10521063ed#file-linked-list-js).

### Complexity

<div class="complexity-table">
    <table>
        <thead>
            <tr>
                <th>Operation</th>
                <th>Complexity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Search</td>
                <td>O(n)</td>
            </tr>
            <tr>
                <td>Insert</td>
                <td>O(1)</td>
            </tr>
            <tr>
                <td>Delete</td>
                <td>O(1)</td>
            </tr>
            <tr>
                <td>Max/Min</td>
                <td>O(n)</td>
            </tr>
            <tr>
                <td>Predecessor</td>
                <td>O(1)</td>
            </tr>
            <tr>
                <td>Successor</td>
                <td>O(1)</td>
            </tr>
        </tbody>
    </table>
</div>

### The Good

- Insertion and Deletion can be achieved in constant time.

### The Bad

- Searching is slow since we can't leverage fast searching algorithms such as Binary Search.
- Extra memory is required to store references to predecesors/sucesors.
