class Node{
    constructor(data){
        this.data = data;
        this.left=null;
        this.right=null;        
        this.center=null;        
    }    
}

class LinkedList{
    constructor(){
        this.root = null;
    }

    insertNode(data){
        const node = new Node(data);
        if(this.root === null){
            this.root = node;
            return;
        }
    }
    printNode(){
        let pnode = this.root;
        while(pnode.data){
            console.log(pnode.data);
            pnode = pnode.center;
        }
    }
}
const ll = new LinkedList();
ll.insertNode(200);
console.log(ll);