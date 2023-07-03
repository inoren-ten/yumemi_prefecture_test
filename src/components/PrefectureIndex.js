import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { resas } from '../App';
import {ImRadioUnchecked, ImRadioChecked2} from 'react-icons/im'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 10rem);
    margin: 0 auto;
`;

const PrefectureBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem;
    padding: 0.2rem 0.6rem;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;

const UnButton = styled(Button)`
    color: #0f83fd;
`;

const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    font-weight: 600;
`;

function PrefectureIndex(props) {
    const {pref, onSelect} = props;
    const [prefectures, setPrefectures] = useState([]);

    useEffect(() => {
        resas.get('prefectures')
        .then(resp => {
            setPrefectures(resp.data.result)
        })
        .catch(e => {
            console.log(e)
        })
    }, []);

    return (
        <Container>
        {prefectures.map((item) => {
            return (
                <PrefectureBox
                    key={item.prefCode}
                >
                {pref === item.prefCode ? (
                    <UnButton><ImRadioChecked2 /></UnButton>
                ) : (
                    <Button onClick={() => onSelect(item.prefCode)}><ImRadioUnchecked /></Button>
                )}
                    <Text>{item.prefName}</Text>
                </PrefectureBox>
            )
        })}
        </Container>
    )
}

export default PrefectureIndex
