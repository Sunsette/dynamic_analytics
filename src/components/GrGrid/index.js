import React, {Component} from 'react';
import {Button, Grid, Segment, Header, Icon} from 'semantic-ui-react'
import {Doughnut, Line} from 'react-chartjs-2';
import GrGridColumns from './GrGridColumns';

class GrGrid extends Component {
  render() {
    let rows = Math.round(this.props.data.length / 2),
      datasets = [];
      function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
    datasets = chunkArray(this.props.data, rows);

    var gridRows = datasets.map((dataset, index) => {
    return(
        <GrGridColumns key={index} data={dataset}>
        </GrGridColumns>
    )
    }
  );
            return (
    <Grid columns='equal'>
    {gridRows}
    </Grid>
  );
  }
}

export default GrGrid;
