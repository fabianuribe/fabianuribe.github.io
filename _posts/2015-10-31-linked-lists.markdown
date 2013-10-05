---
layout: post
title: "Data Structures in Javascript: Linked Lists"
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

{% gist fabianuribe/cf4f9af85e10521063ed %}

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
