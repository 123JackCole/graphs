// Implementation

function Graph() {
    this.AdjList = new Map();
}

Graph.prototype.addNode = function(data) {
    // initialize an adjacency list with an empty array
    this.AdjList.set(data, []);
}

Graph.prototype.addEdge = function(node1, node2) {
    // find the node and add the edge to it's list
    this.AdjList.get(node2).push(node1);
    // we need to do this for both directions because graphs
    // dont have direction
    this.AdjList.get(node1).push(node2);
}

Graph.prototype.print = function() {
    for ([key, value] of this.AdjList) {
        console.log(key, value);
    }
}

// create our nodes and edges in arrays
let nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let edges = [['A', 'B'], ['A', 'C'], ['A', 'D'], ['C', 'F'], ['D', 'E'],
            ['E', 'F'], ['C', 'G'], ['C', 'H'], ['E', 'H']];

// create a new graph
graph = new Graph();

// loop through our arrays to add our nodes and edges to our graph
nodes.forEach(node => {
    graph.addNode(node);
});

edges.forEach(([node1, node2]) => {
    graph.addEdge(node1, node2);
});

// print it
graph.print();

// Traversal

// BFS

console.log(graph.AdjList)

const bfs = (node) => {

    let visited = [];

    let queue = [node];

    while (queue.length) {

        const data = queue.shift();
        const list = this.AdjList.get(data);

        for (i in list) {

            node = list[i];

            if (!visited.includes(node)) {
                visited.push(node);
                queue.push(node);
            }

        }

    }

}

// DFS


