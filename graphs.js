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

Graph.prototype.BFS = function(node) {

    const visited = [];
    for (const key of this.AdjList.keys()) {
        key === node ? visited[key] = true : visited[key] = false;
    }

    const queue = [node];

    while (queue.length) {

        const current = queue.shift();
        const edges = this.AdjList.get(current);

        console.log(current);

        for (const i in edges) {

            const currentNode = edges[i];

            if (!visited[currentNode]) {
                visited[currentNode] = true;
                queue.push(currentNode);
            }

        }

    }

    console.log(visited);
    return visited;

}

graph.BFS('A');

// DFS

Graph.prototype.DFS = function(node) {

    let visited = [];
    for (const key of this.AdjList.keys()) {
        visited[key] = false;
    }

    visited = this.DFSRecursive(node, visited);

    console.log(visited);
}

Graph.prototype.DFSRecursive = function(node, visited) {

    visited[node] = true;

    const edges = this.AdjList.get(node);

    console.log(node);

    for(const node of edges) {
        if(!visited[node]) {
            this.DFSRecursive(node, visited)
        }
    }

    return visited;
}

graph.DFS('A');