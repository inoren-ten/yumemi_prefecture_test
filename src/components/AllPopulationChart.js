import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { styled } from 'styled-components'
import { resas } from '../App';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function AllPopulationChart(props) {
    const {pref} = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (pref) {
            resas.get(`population/composition/perYear?cityCode=-&prefCode=${pref}`)
            .then(resp => {
                setData(resp.data.result.data[0].data)
                console.log(resp.data.result.data[0].data)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }, [pref]);

    return (
        <Container>
        {data.length !== 0 && (
            <LineChart
            width={1000}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ffffff"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        )}
        </Container>
    )
}

export default AllPopulationChart
