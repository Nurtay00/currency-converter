import React, {useEffect, useState} from 'react';
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import useResult from "../../hooks/useResult";
import {useHistory} from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import styled from "styled-components";


const Input = styled.input`
  font-size: 20px;
  border-radius: 5px;
`;
const Box = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
`

const Select = styled.select`
  font-size: 20px;
  margin-left: 10px;
`

const Text = styled.span`
  margin-left: 10px;
  color: #f0f6fc;
`
const Button = styled.button`
  margin-top: 10px;
`

const ConverterInput = () => {
    const Currency = ['USD', 'RUB', 'EUR', 'KZT'];
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState(0);
    let history = useHistory();

    const {currentCurrencyInfo} = useCurrencyInfo();
    const {saveResult} = useResult();
    const {setLoading} = useLoading();

    useEffect(() => {
        setFromCurrency(currentCurrencyInfo.base_code);
        setToCurrency(Currency.filter(el => el !== currentCurrencyInfo.base_code)[0]);
    }, [currentCurrencyInfo])

    const submit = () => {
        const result = {
            from: fromCurrency,
            to: toCurrency,
            amount: amount,
        }
        saveResult(result);
        setLoading(true);
        history.push('/result');
    }


    return (
        <Box>
            <div>
                <Input type='number' onChange={(event) => setAmount(Number(event.target.value))}/>
                <Select defaultValue={fromCurrency} onChange={item => {
                    setFromCurrency(item.target.value);
                    setToCurrency(Currency.filter(el => el !== item.target.value)[0])
                }}>
                    {Currency.map((item, index) => <option value={item}
                                                           key={index}>{item}</option>)}
                </Select>
                <Text>in</Text>
                <Select defaultValue={toCurrency} onChange={item => setToCurrency(item.target.value)}>
                    {Currency.filter(el => el !== fromCurrency).map((item, index) => <option value={item}
                                                                                             key={index}>{item}</option>)}
                </Select>
            </div>
            <Button onClick={submit} disabled={amount===0}>enter</Button>
        </Box>
    );
};

export default ConverterInput;