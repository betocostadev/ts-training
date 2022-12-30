import { Node } from './shared/Node'
import { Sorter } from './shared/Sorter'
// Linked list
// | ----- Node ----- | ...
// [head: 10, next: 20] => [head: 20, next: 55] => [head: 55, next: null] => null
export class LinkedList extends Sorter {
  head: Node | null = null

  // Add a new Node to the list
  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  // Get the length of the list
  get length(): number {
    if (!this.head) return 0

    let length = 1
    let node = this.head

    while (node.next) {
      length++
      node = node.next
    }

    return length
  }

  // Get the data of a Node in index N
  at(index: number): Node {
    const notFoundMessage = 'Index out of bounds'

    if (!this.head) {
      throw new Error (notFoundMessage)
    }

    let counter = 0
    let node: Node | null = this.head

    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }

    throw new Error(notFoundMessage)
  }

  // Compare two Nodes
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  // Swap head values of two Nodes - Not actually swaping two Nodes
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)
    const leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  // Print the Nodes
  print(): void | Node[] {
    const toPrint = []
    if (!this.head) {
      return
    }
    
    let node: Node | null = this.head

    while (node) {
      toPrint.push(node)
      node = node.next
    }
    return toPrint
  }
}