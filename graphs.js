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

