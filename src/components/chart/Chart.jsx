import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({title,data,grid,dataKey}) => {
   
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart