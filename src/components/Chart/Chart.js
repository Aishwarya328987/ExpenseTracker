
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const {dataPoints} = props;

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} maxValue={totalMaximum} dataPoint={dataPoint}/>
            })}
        </div>
    );
}

export default Chart;