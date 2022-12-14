//react-google-charts
//https://www.react-google-charts.com/examples/stepped-area-chart
//npm install --save react-google-charts
//
//Другие варианты диаграмм еще есть тут: 
//https://www.chartjs.org/docs/latest/ 
//https://apexcharts.com/docs/chart-types/bar-chart/#
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AreaChart from './Charts/AreaChart'
import BarChart from './Charts/BarChart'
import BubbleChart from './Charts/BubbleChart'
import Calendar from './Charts/Calendar'
import CandlestickChart from './Charts/CandlestickChart'
import ColumnChart from './Charts/ColumnChart'
import ComboChart from './Charts/ComboChart'
import Gantt from './Charts/Gantt'
import Gauge from './Charts/Gauge'
import GeoChart from './Charts/GeoChart'
import Histogram from './Charts/Histogram'
import LineChart from './Charts/LineChart'
import OrgChart from './Charts/OrgChart'
import PieChart from './Charts/PieChart'
import Sankey from './Charts/Sankey'
import Scatter from './Charts/Scatter'
import SteppedAreaChart from './Charts/SteppedAreaChart'

export default function Сharts() {
    return (
        <Card>
            <Card.Header>Диаграммы (React Google Charts)</Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>Gantt</Card.Header>
                        <Card.Body> 
                          <Gantt />
                        </Card.Body>
                    </Card>                    
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>PieChart</Card.Header>
                        <Card.Body> 
                          <PieChart />
                        </Card.Body>
                    </Card>                    
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>OrgChart</Card.Header>
                        <Card.Body> 
                          <OrgChart />
                        </Card.Body>
                    </Card>                                        
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>LineChart</Card.Header>
                        <Card.Body> 
                          <LineChart />
                        </Card.Body>
                    </Card>                                        
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>ComboChart</Card.Header>
                        <Card.Body> 
                          <ComboChart />
                        </Card.Body>
                    </Card>                                        
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>BarChart</Card.Header>
                        <Card.Body> 
                          <BarChart />
                        </Card.Body>
                    </Card>                                        
                </Col>
              </Row>              
              <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>Histogram</Card.Header>
                        <Card.Body> 
                          <Histogram />
                        </Card.Body>
                    </Card>                    
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>CandlestickChart</Card.Header>
                        <Card.Body> 
                          <CandlestickChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>ColumnChart</Card.Header>
                        <Card.Body> 
                          <ColumnChart />
                        </Card.Body>
                    </Card>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>BubbleChart</Card.Header>
                        <Card.Body> 
                          <BubbleChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>AreaChart</Card.Header>
                        <Card.Body> 
                          <AreaChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>Gauge</Card.Header>
                        <Card.Body> 
                          <Gauge />
                        </Card.Body>
                    </Card>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>GeoChart</Card.Header>
                        <Card.Body> 
                          <GeoChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>Calendar</Card.Header>
                        <Card.Body> 
                          <Calendar />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>Sankey</Card.Header>
                        <Card.Body> 
                          <Sankey />
                        </Card.Body>
                    </Card>
                </Col>
              </Row>              
              <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>Scatter</Card.Header>
                        <Card.Body> 
                          <Scatter />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>SteppedAreaChart</Card.Header>
                        <Card.Body> 
                          <SteppedAreaChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    {/* <Card>
                        <Card.Header></Card.Header>
                        <Card.Body> 
                        
                        </Card.Body>
                    </Card> */}
                </Col>
              </Row>                
            </Card.Body>
        </Card>
    );
}