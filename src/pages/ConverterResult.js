import React, {useEffect, useState} from 'react';
import useResult from "../hooks/useResult";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import useLoading from "../hooks/useLoading";
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import Dashboard from "../components/CurrencyDashboard/Dashboard";

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #f0f6fc;
  background: #30363d;
  padding-top: 100px;
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  
`;
const Text = styled.div`
padding-top: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  
`;

const Button = styled.button`
  margin-top: 10px;
`


const ConverterResult = () => {
    const {currentResult} = useResult();
    const {currentCurrencyInfo} = useCurrencyInfo()
    const {isLoading, setLoading} = useLoading();
    const [ratio, setRatio] = useState(0);
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    useEffect(() => {
        if(!currentCurrencyInfo.conversion_rates || !currentResult.from) handleClick();
        else{
            setRatio(currentCurrencyInfo?.conversion_rates[currentResult.to] / currentCurrencyInfo?.conversion_rates[currentResult.from])
            setLoading(false);
        }

    }, [])

    if (isLoading) {
        return <Layout>loading...</Layout>
    } else {
        return (
            <Layout>
                <Content>
                    <Dashboard type={currentResult.from}/>
                    <div>
                        <Text>Result:</Text>
                        <Result>
                            <span>{currentResult.amount} {currentResult.from}</span>
                            <span>{ratio*currentResult.amount} {currentResult.to}</span>
                            </Result>
                    </div>

                    <Button onClick={handleClick}>back</Button>

                </Content>
              </Layout>
        );
    }
};

export default ConverterResult;