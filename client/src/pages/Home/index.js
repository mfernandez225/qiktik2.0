import React, { useState, useEffect } from "react";
import {Search, SideNavbar, StockCard,Chart} from '../../components'
import { Container, Row, Col, Media } from "reactstrap";
import{API, useAuth} from '../../utils'
import "./style.css";
import logo from "../../assets/imgs/simpleteal.png";
// loginRequired coming from useAuth in utils folder, ensuring that the user can't access qiktik without being logged in.

const Home = () => {
  const { loginRequired } = useAuth();
  useEffect(() => {
    loginRequired();
  }, [loginRequired]);

  const [favoriteStocks, setFavoriteStocks] = useState([]);
  useEffect(() => {
    API.getFavorites()
    .then(({ data: favorites }) => {
    setFavoriteStocks(favorites);
    })
    .catch(err=>console.log(err))
  }, []);
 
  const[displayData, setDisplayData]= useState([]);
  const [stocks, setStocks]= useState([]);
  useEffect(()=>{
     loadStocks()
  }, [])

  function loadStocks() {
    API.getStocks()
    .then(res => 
     { //console.log(res.data)
      setStocks(res.data)}
      )
      .catch(err => console.log(err));
  }

  const [chartData, setChartData] = useState([]);


  
  

function handleInput ({symbol}) {
API.getBars(symbol)
.then(res => setChartData(res.data))
.catch(err => console.log(err));



  }



 

  return (
    <Container fluid={true}>
      <Row md="3" id="full">
        {/* User is selecting and displaying favorite stocks from stock tile to side navbar */}
        <Col
          id="coll"
          xs="12"
          s="5"
          md="3"
          lg="3"
          style={{ marginLeft: "-15px" }}
        >
          <SideNavbar
            favoriteStocks={favoriteStocks}
            setFavoriteStocks={setFavoriteStocks}
          />
        </Col>

        <Col className="text-center" md="9" sm="12">
          <div className="row-col-sm text-light fontMe mt-3">
            <Media left className="">
              <Media object src={logo} alt="qiktik" id="homeLogo" />
            </Media>
          </div>
          <Search name="symbolLookup" 
          onChange={handleInput}
          stocks={stocks}
          />

          <Row >
          <Col>
          {displayData.length !== 0 ? 
          StockCard(displayData):false}
          </Col>
    
               {chartData.length !== 0?
             Chart(chartData):false}
            
          </Row>
          
          
          
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
