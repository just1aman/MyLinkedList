

class node{
  constructor(value)
  {
   this.value= value
   this.next= null
  }
}

class LinkedList1{
  constructor(value)
  {
 let newNode = new node(value);
   // this.head={
     // value:value,
     // next:null
   // }
  this.head=newNode
    this.length=1
    this.tail=this.head
  }

  append(value)
  {
    //let newNode ={
     // value:value,
     // next:null
   // }
    let newNode = new node(value);
    this.tail.next=newNode
    this.tail=newNode
    this.length++
    return this
  }

 printList(){
   const array=[]
   let curruentNode = this.head
   while(curruentNode!== null)
   {
          array.push(curruentNode.value)
        //  console.log(curruentNode)
    curruentNode=curruentNode.next
   }
   return array
 }


   printList1() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }

  reverse()
  {
    if(this.length<=1)
    {
      return this
    }
    else
    {
      let first= this.head
      let second= this.head.next
      while(second)
      {
        let temp = second.next // temp-->10
        second.next=first //15.next -->5
        first=second //move 15 to position 0
        second=temp
       //console.log(this)
      }
      this.head.next = null;
this.head = first;
      return this
  }
}
}


const myLinkedList= new LinkedList1(5)
myLinkedList.append(15)
myLinkedList.append(10)
myLinkedList.append(101)
myLinkedList.printList()
myLinkedList.reverse()
myLinkedList.printList()


