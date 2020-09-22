import React from 'react';
import{Card,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';



function StockCard (stock){
      
  return(
        <div>
        <Card>
            <CardBody>
    <CardTitle>{stock.companyName}</CardTitle>
    <CardSubtitle>{stock.symbol}</CardSubtitle>
    <CardText>{stock.changePercent*100}%</CardText>
            </CardBody>
        </Card>
        </div>
        

    )

}

export default StockCard