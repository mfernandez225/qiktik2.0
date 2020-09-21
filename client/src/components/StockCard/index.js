import React from 'react';
import{Card,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';


function StockCard (stock){
      
  
    return(
        
        <div>
        <Card>
            <CardBody>
    <CardTitle>{stock.companyName}</CardTitle>
    <CardSubtitle>{stock.symbol}</CardSubtitle>
    <CardText>{stock.changePercent*100}%</CardText>
                
                <Button></Button>
            </CardBody>
        </Card>
        </div>
        

    )

}

export default StockCard