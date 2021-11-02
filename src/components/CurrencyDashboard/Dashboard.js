import React, {useEffect, useState} from 'react';
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import styled from "styled-components";
import {dataService} from "../../services/getCurrency.service";
import useLoading from "../../hooks/useLoading";


const Title = styled.div`
  font-size: 40px;
  color: #f0f6fc;
  padding-bottom: 20px;
`
const Item = styled.div`
  font-size: 21px;
  color: #f0f6fc;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Dashboard = (props) => {
    const {currentCurrencyInfo} = useCurrencyInfo();
    const Currency = ['USD', 'RUB', 'EUR', 'KZT']
    const currentType = props.type || currentCurrencyInfo?.base_code;
    const [data, setData]= useState({});
    const {isLoading, setLoading} = useLoading();

    useEffect(()=>{
        if(props.type){
          dataService.getConverter(currentType).then(el=> {
              setData(el);
          })
        }else{
            setData(currentCurrencyInfo);
        }
    },[])


    return (
        <div>
            <Title>
                Currency Converter
            </Title>
            <div>
                {data?.conversion_rates && Currency.map((item,index) => {
                    if (item !== currentType) {
                        return (
                            <Item key={index}>
                                <span>1 {currentType}</span>
                                <span>{data?.conversion_rates[item]} {item}</span>
                            </Item>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default Dashboard;