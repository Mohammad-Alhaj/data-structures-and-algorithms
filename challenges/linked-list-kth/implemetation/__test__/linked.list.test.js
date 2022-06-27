'use strict';
const linkedList = require('../link')

describe("liked",()=>{
    it("k is greater than the length of the linked list",()=>{
        const element = new linkedList()
        element.append(1)
        element.append(3)
        element.append(7)
        element.reverse()
        // element.kthFromEnd(23)
        expect(element.kthFromEnd(23)).toEqual("Exception")
    })
    it("k and the length of the list are the same",()=>{
        const element = new linkedList()
        element.append(1)
        element.append(3)
        element.append(7)
        element.reverse()
        // element.kthFromEnd(23)
        expect(element.kthFromEnd(element.length)).toEqual("Exception")
    })
    it("k is not a positive integer",()=>{
        const element = new linkedList()
        element.append(1)
        element.append(3)
        element.append(7)
        element.reverse()
        // element.kthFromEnd(23)
        expect(element.kthFromEnd(-5)).toEqual("Exception")
    })
    it("the linked list is of a size 1",()=>{
        const element = new linkedList()
        element.append(1)
        // element.kthFromEnd(23)
        expect(element.kthFromEnd(0)).toEqual(1)
    })
    it("where k is not at the end, but somewhere in the middle of the linked list",()=>{
        const element = new linkedList()
        element.append(1)
        element.append(3)
        element.append(5)
        element.append(7)
        element.append(9)
        element.append(12)
     
        element.reverse()
        // element.kthFromEnd(23)
        expect(element.kthFromEnd(3)).toEqual(5)
    })
    it(" finds the node at the middle of the Linked List.",()=>{
        const element = new linkedList()
        element.append(1)
        element.append(3)
        element.append(5)
        element.append(7)
        element.append(9)
        element.append(12)
        element.append(15)
     
        // element.kthFromEnd(23)
        expect(element.middle()).toEqual(7)
    })
})
