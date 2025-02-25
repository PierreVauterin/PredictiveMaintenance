/* Classic importations */
import {
    LineChart,
    Line,
    Legend,
    Tooltip,
    XAxis,
    Label,
    YAxis
  } from "recharts";
  
  /* 
  Main component
  Builds a LineChart with randomly generated (light) colors for each line
  Props:
  - data: an Object, in the shape of [{key1:value,key2:value,...},{key1:value,key2:value,...},...]
  - keyList: an array containing the keys for each set of data
  - YLabel: the label for the Y axis
  - XLabel: the label for the X axis
  */
  export const Chart = (props) => {
    const keyList = props.keyList;
  
    /* 
    Creates a random light color (light because of dark background)
    May create similar colors on the same diagram because of randomness
    */
    function getRandomColor() {
      const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
      return color;
    }
  
    return (
      <>
        <LineChart data={props.data} width={700} height={450}>
          <XAxis dataKey={"Observation"} stroke="white">
            <Label
              value={props.XLabel}
              offset={-8}
              position="bottom"
              fill="white"
            />
          </XAxis>
          <YAxis dataKey={keyList[0]} type="number" stroke="white">
            <Label
              value={props.YLabel}
              offset={-8}
              position="left"
              angle={-90}
              fill="white"
            />
          </YAxis>
          <Tooltip contentStyle={{ backgroundColor: "rgb(46, 50, 58)" }} />
          <Legend verticalAlign="top" height={36} />
          <Line dataKey={props.main} stroke="#ff0000" strokeWidth={3} />
  
          {keyList.length === 0 ? (
            <></>
          ) : (
            keyList.map((id) => {
              return (
                <Line
                  key={`line_${id}`}
                  dataKey={`${id}`}
                  stroke={getRandomColor()}
                />
              );
            })
          )}
        </LineChart>
      </>
    );
  };