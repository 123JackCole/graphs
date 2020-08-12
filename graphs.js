function Graph() {
    this.AdjList = new Map();
}

Graph.prototype.addNode = function(data) {
    // initialize an adjacency list with an empty array
    this.AdjList.set(data, []);
}

