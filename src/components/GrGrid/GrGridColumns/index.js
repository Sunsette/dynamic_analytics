import React, {Component} from 'react';
import {Button, Grid, Segment, Header, Icon} from 'semantic-ui-react'
import {Doughnut, Line} from 'react-chartjs-2';

class GrGridColumns extends Component {

  render() {
    let columns = this.props.data.map((dataset, index) => {
      let column;
      if(dataset.type === 'doughnut'){
      column =  <Grid.Column key={index}>
            <Segment>
                <Header as='h2' dividing textAlign='justified'>
                    <Header.Content>
                        Doughnut Data
                    </Header.Content>
                    <Header.Content>
                        <Icon name='setting' color="green"/>
                    </Header.Content>
                </Header>
                <Doughnut data={dataset}/>
            </Segment>
        </Grid.Column>
      }else{
      column =  <Grid.Column key={index}>
            <Segment>
                <Header as='h2' dividing textAlign='justified'>
                    <Header.Content>
                        Line Data
                    </Header.Content>
                    <Header.Content>
                        <Icon name='setting' color="green"/>
                    </Header.Content>
                </Header>
                <Line data={dataset}/>
            </Segment>
        </Grid.Column>
      }
      return column;
  }
  );
    return (
      <Grid.Row>
    {columns}
    </Grid.Row>
  )
  }
}

export default GrGridColumns;
