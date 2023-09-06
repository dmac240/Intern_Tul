class node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }


add(value) {
    if(value < this.value){
        this.addLeft(value);
    }else{
        this.addRight(value);
    }
}

addLeft(value){
    if(this.left){
        this.left.add(value);
    }else{
        this.left = new node(value);
    }
}

addRight(value){
    if(this.right){
        this.right.add(value);
    }else{
        this.right = new node(value);
    }
}
}