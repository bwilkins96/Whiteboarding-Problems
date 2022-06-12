// Mirror Image Trees

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function mirrorImageTrees(rootNode1, rootNode2) { //t: O(n), s: O(n)
    const queue1 = [[rootNode1]]; const queue2 = [[rootNode2]];

    while (queue1.length > 0 && queue2.length > 0) {
        let currentLevel1 = queue1.pop(); let currentLevel2 = queue2.pop();
        let nextLevel1 = []; let nextLevel2 = [];

        if ((currentLevel1.length === currentLevel2.length) && currentLevel1.length > 0) {

            for (let i = 0; i < currentLevel1.length; i++) {
                let currentNode1 = currentLevel1[i];
                let currentNode2 = currentLevel2[i];

                if (currentNode1.val !== currentNode2.val) {return false}

                let neighbors1 = getNeighbors(currentNode1);
                let neighbors2 = getNeighbors(currentNode2).reverse();

                if (neighbors1.length > 0) {
                    nextLevel1.push(...neighbors1);
                    nextLevel2.push(...neighbors2);
                }

                if (nextLevel2.length > 0) {
                    queue1.push(nextLevel1); queue2.push(nextLevel2);
                }
            }

        } else { return false }
    }

    return true;
}

function getNeighbors(rootNode) {
    const neighbors = [];

    if (rootNode.left) {neighbors.push(rootNode.left)}
    if (rootNode.right) {neighbors.push(rootNode.right)}

    return neighbors;
}

//Example

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

let root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(5);
root2.right.right = new TreeNode(4);

//console.log(getNeighbors(root1)) // [node 2, node 3]
console.log(mirrorImageTrees(root1, root2)) //true
console.log(mirrorImageTrees(root1, root1)) //false
