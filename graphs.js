function Graph() {
    this.AdjList = new Map();
}

Graph.prototype.addNode = function(data) {
    // initialize an adjacency list with an empty array
    this.AdjList.set(data, []);
}

Graph.prototype.addEdge = function(from, to) {
    // find the node and add the edge to it's list
    this.AdjList.get(to).push(from);
    // we need to do this for both directions because graphs
    // dont have direction
    this.AdjList.get(from).push(to);
}