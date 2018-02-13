import React, {Component} from 'react';
import GrGrid from './components/GrGrid';
import DatePicker from 'react-datepicker';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Accordion, List, Dropdown, Breadcrumb } from 'semantic-ui-react'

class App extends Component {
  state = { activeIndex: 0 }

handleClick = (e, titleProps) => {
  const { index } = titleProps
  const { activeIndex } = this.state
  const newIndex = activeIndex === index ? -1 : index

  this.setState({ activeIndex: newIndex })
  console.log('test click');
}
    render() {
        let newData = {
                type: 'doughnut',
                datasets: [
                    {
                        data: [
                            10, 20, 30
                        ],
                        backgroundColor: [
                            '#FF6384', '#36A2EB', '#FFCE56'
                        ],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: ['Red', 'Blue', 'Yellow']
            },
            lineData = {
              type: 'line',
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July'
                ],
                datasets: [
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [
                            65,
                            59,
                            80,
                            81,
                            56,
                            55,
                            40
                        ]
                    }
                ]
            },
            allData = [newData, lineData, lineData],
            visible = true,
            toggleVisibility = () => {visible = !this.state.visible};

            const { activeIndex } = this.state
            const sections = [
            { key: 'Home', content: 'Home', link: true },
            { key: 'Store', content: 'Store', link: true },
            { key: 'Shirt', content: 'T-Shirt', active: true },
          ]

        return (
            <div className="App">
            <Menu attached='top'>
     <Dropdown item icon='wrench' simple>
       <Dropdown.Menu>
         <Dropdown.Item>
           <Icon name='dropdown' />
           <span className='text'>New</span>

           <Dropdown.Menu>
             <Dropdown.Item>Document</Dropdown.Item>
             <Dropdown.Item>Image</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown.Item>
         <Dropdown.Item>Open</Dropdown.Item>
         <Dropdown.Item>Save...</Dropdown.Item>
         <Dropdown.Item>Edit Permissions</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Header>Export</Dropdown.Header>
         <Dropdown.Item>Share</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
     <Menu.Menu position='left'>
      <Breadcrumb icon='right angle' sections={sections} />
      </Menu.Menu>
      <Menu.Menu position='right'>
       <div className='ui right aligned category search item'>
      <div className='ui transparent icon input'>
       <input className='prompt' type='text' placeholder='From Date' />
       <i className='calendar link icon' />
       </div>
       </div>
       </Menu.Menu>
       <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
       <div className='ui transparent icon input'>
        <input className='prompt' type='text' placeholder='To Date' />
        <i className='calendar link icon' />
        </div>
        </div>
        </Menu.Menu>
   </Menu>
            <Grid divided='vertically'>
             <Grid.Column width={3}>
             <Accordion as={Menu} vertical>
  <Menu.Item>
    <Accordion.Title
      active={activeIndex === 0}
      content='Sales'
      index={0}
      onClick={this.handleClick}
    />
    <Accordion.Content active={activeIndex === 0}>
    <List selection verticalAlign='middle'>
    <List.Item>
      <List.Content>
        <List.Header>Overview</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Deep Dive</List.Header>
      </List.Content>
    </List.Item>
  </List>
    </Accordion.Content>
  </Menu.Item>

  <Menu.Item>
    <Accordion.Title
      active={activeIndex === 1}
      content='Products'
      index={1}
      onClick={this.handleClick}
    />
    <Accordion.Content active={activeIndex === 1}>
    <List selection verticalAlign='middle'>
    <List.Item>
      <List.Content>
        <List.Header>Overview</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Deep Dive</List.Header>
      </List.Content>
    </List.Item>
  </List>
    </Accordion.Content>
  </Menu.Item>
</Accordion>
             </Grid.Column>
              <Grid.Column width={13}>
          <GrGrid data={allData}>
          </GrGrid>
           </Grid.Column>
          </Grid>
            </div>
        );
    }
}

export default App;
