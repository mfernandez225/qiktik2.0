import React, { useEffect, useState } from 'react';
import{Card,CardText,CardBody,CardTitle,CardSubtitle,Button,Spinner} from 'reactstrap';
import API from '../../utils/API';

function StockCard ({symbol}){
    const [ stockData, setStockData] = useState([]);
    useEffect(()=>{
        loadStockData()
    },[])

   function loadStockData(){ 
       API.getStockInfo(symbol)
        .then(res => {
        console.log(res)
        setStockData(res.data)
    }
    )
    .catch(err => console.log(err));}
    

    return(
        
        <div>
        <Card>
            <CardBody>
    <CardTitle>{stockData.companyName}</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText></CardText>
                
                <Button></Button>
            </CardBody>
        </Card>
        </div>
        

    )

}

export default StockCard