import React, {useEffect} from 'react';
import useLoading from "../hooks/useLoading";
import ConverterInput from "../components/ConverterInput/ConverterInput";
import {dataService} from "../services/getCurrency.service";
import Dashboard from "../components/CurrencyDashboard/Dashboard";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background: #30363d;
  color: #f0f6fc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;




const CurrencyConverter = () => {
    const userLang = navigator.language || navigator.userLanguage;
    const {saveInfo} = useCurrencyInfo();
    const {isLoading,setLoading} = useLoading()

    useEffect(() => {
        dataService.getConverter(userLang === 'en-US' ? 'USD' : 'RUB').then(data => {
            saveInfo(data)
            setLoading(false);
        })
    }, []);

    if (isLoading) {
        return <Layout>loading...</Layout>
    } else {
        return (<Layout>
            <Content>
                <Dashboard/>
                <ConverterInput/>
            </Content>
        </Layout>)
    }


};

export default CurrencyConverter;