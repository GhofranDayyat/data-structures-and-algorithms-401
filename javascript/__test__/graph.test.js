'use strict';

const Graph= require('../challenges/graph/implementGraph/graph').Graph;
const Vertex= require('../challenges/graph/implementGraph/graph').Vertex;
const Edge= require('../challenges/graph/implementGraph/graph').Edge;


describe('Testing Graph Implementation',()=>{
  it('Create instant Of Graph ',()=>{
    const newGraph = new Graph();
    expect(newGraph instanceof Graph).toBeTruthy;
  });

  it('Create instant Of Vertex',()=>{
    const newVertex = new Vertex(0);
    expect(newVertex instanceof Vertex).toBeTruthy;
  });
  it('Create instant Of Edge',()=>{
    const newEdge = new Edge();
    expect(newEdge instanceof Edge).toBeTruthy;
  });
  it('addVertex(vertex) method' ,()=>{
    const newGraph = new Graph();
    const one = new Vertex(1);
    expect(newGraph.addVertex(one).value).toEqual(1);
  });
  it('getVertex() method' ,()=>{
    const newGraph = new Graph();
    expect(newGraph.getVertex()).toEqual([]);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);
    newGraph.addVertex(four);
    const vertexes = newGraph.getVertex();
    expect(vertexes).toBeDefined();
    for (const [vertex] of vertexes) {
      expect(vertex).toHaveProperty('value');
    }
  });

  it('hasExist(Vertex)' ,()=>{
    const newGraph = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);
    newGraph.addVertex(four);
    expect(newGraph.hasExist(one)).toBeTruthy();
  });

  it('addEdge(start , end , weight) method' ,()=>{
    const newGraph = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const four = new Vertex(4);
    const five = new Vertex(5);

    const ten = new Vertex(10);
    const twenty = new Vertex(20);
    const fourteen = new Vertex(14);
    const fifteen = new Vertex(15);

    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(four);
    newGraph.addVertex(five);

    const firstEdge= newGraph.addEdge(one, ten);
    const secEdge= newGraph.addEdge(two, twenty);
    const thirdEdge= newGraph.addEdge(four, fourteen);
    const fourEdge= newGraph.addEdge(five, fifteen);

    expect(firstEdge.vertex).toEqual(ten);
    expect(secEdge.vertex).toEqual(twenty);
    expect(thirdEdge.vertex).toEqual(fourteen);
    expect(fourEdge.vertex).toEqual(fifteen);

  });

  it('try to add edge on non exist vertex' ,()=>{
    const newGraph = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);

    expect(newGraph.addEdge(one,two)).toEqual('Not Found Vertex');
  });
  it('size() of graph' ,()=>{
    const newGraph = new Graph();
    const epmtyGraph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const four = new Vertex(4);
    const five = new Vertex(5);

    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(four);
    newGraph.addVertex(five);

    expect(epmtyGraph.size()).toBeNull();
    expect(newGraph.size()).toEqual(4);
  });
  it('getNeighbors(vertex)' ,()=>{
    const newGraph = new Graph();
    const one = new Vertex(1);
    const two = new Vertex(2);
    const four = new Vertex(4);
    const ten = new Vertex(10);
    const twenty = new Vertex(20);
    const fourteen = new Vertex(14);

    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(four);

    newGraph.addEdge(one, ten);
    newGraph.addEdge(two, twenty);
    newGraph.addEdge(four, fourteen);

    expect(newGraph.getNeighbors(one)[0].vertex.value).toEqual(10);
    expect(newGraph.getNeighbors(two)[0].vertex.value).toEqual(20);
    expect(newGraph.getNeighbors(four)[0].vertex.value).toEqual(14);

  });

});
