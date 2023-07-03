import React, { useState } from 'react'
import { styled, css } from 'styled-components'
import PrefectureIndex from '../components/PrefectureIndex';
import AllPopulationChart from '../components/AllPopulationChart';

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5rem 0.5rem;
    margin: 0 auto;
    ${css`
        @media screen and (min-width: 1201px) {
            width: 1200px;
        }
    `}
`;

function Home() {
    const [selectPref, setSelectPref] = useState(null);
    const [page, setPage] = useState(0);

    const selectPrefecture = (id) => {
        setSelectPref(id)
    };

    return (
        <Container>
            <PrefectureIndex pref={selectPref} onSelect={selectPrefecture} />
            {selectPref && (
                <AllPopulationChart pref={selectPref} />
            )}
        </Container>
    )
}

export default Home
