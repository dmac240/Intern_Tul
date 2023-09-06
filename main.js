const Bt = new node();
const root = Bt.getRootNode();
let arrayResults = [];

function turn(bTNode = this.root, level = 0) {
    console.log("-".repeat(level), bTNode.value);

    if (bTNode.left) {
        this.turn(bTNode.left, level + 1);
    }

    if (bTNode.right) {
        this.turn(bTNode.right, level + 1);
    }
}


