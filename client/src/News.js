import React from "react";
import PropTypes, { symbol } from "prop-types";
import Loader from "./Loader";
// import StockSelect, {symbol} from "./components/Search";
require("dotenv").config()


const newsDate = [];
const newsHeadline = [];
const newsImage = [];
const newsSummary = [];
const newsUrl = [];
const newsRelated = [];

class News extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  getLatestNews() {
    fetch(
      'https://cloud.iexapis.com/stable/stock/AAPL/news/2?token=' + process.env.REACT_APP_API_KEY_1

    // 'https://cloud.iexapis.com/stable/stock/' + symbol + '/news/2?token=' +  process.env.REACT_APP_API_KEY_1
      // 'https://sandbox.iexapis.com/stable/stock/AAPL/news/2?token=' + process.env.REACT_APP_API_KEY_2

      // "https://cloud.iexapis.com/stable/stock/" +
      //   symbol +
      // "/news/2?token=pk_ab67997aa39c4296b79de441635e9a49"

      

    )
      .then(res => res.json())
      .then(result => {
        for (let i = 0; i < 3; i++) {
          if (typeof result[parseInt(i)] !== "undefined") {
            let date = Date(result[parseInt(i)].datetime)
              .toString()
              .split(" ");
            newsDate[parseInt(i)] = `${date[1]} ${date[2]}`;
            newsHeadline[parseInt(i)] = result[parseInt(i)].headline;
            newsUrl[parseInt(i)] = result[parseInt(i)].url;
            newsSummary[parseInt(i)] = result[parseInt(i)].summary
              .split(" ")
              .splice(-result[parseInt(i)].summary.split(" ").length, 40)
              .join(" ");
            newsRelated[parseInt(i)] = result[parseInt(i)].related;
            newsImage[parseInt(i)] = result[parseInt(i)].image;
          }
        }
      })
      .then(() => {
        setTimeout(() => {
          for (let i = 0; i < newsUrl.length; i++) {
            if (document.querySelector("#img" + i) !== null) {
              document.querySelector(
                "#img" + i,
              ).style = newsImage[parseInt(i)];
            }
          }
        }, 1000);
      })
      .then(() => {
        if (this._isMounted) {
          this.setState({loading: false});
        }
      });
  }
  componentDidMount() {
    this._isMounted = true;
    this.getLatestNews();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div className="news__articles">
        <h5 style={{fontSize: '30px', color: 'black'}}>Latest News</h5>
        <br></br>
        {newsHeadline.map((val, indx) => {
          return (
            <a
              href={newsUrl[parseInt(indx)]}
              target="_blank"
              rel="noopener noreferrer"
              key={indx}>
              <div className="article">
                <div className="article__image" id={"img" + indx} />
                <div className="article__content">
                  <div className="article__top">
                  {/* <h5>{newsDate[parseInt(indx)]}</h5> */}
                  <div className="img_headline">
                  <img style={{width: '60px', height: '60px'}} src ={newsImage[parseInt(indx)]} />
                    <p style={{fontSize: '20px', color: 'black', paddingTop: '10px'}}>{val}
                    </p>
                  </div>                    
                  </div>
                  <h6 style={{fontSize: '14px', color: 'blue', paddingLeft: '120px', paddingRight: '40px', paddingTop: '10px'}}>{newsSummary[parseInt(indx)]}........</h6>
                </div>
              </div>
              <hr></hr>
            </a>
          );
        })}
        {newsHeadline.length === 0 && !this.state.loading && (
          <div className="news__nothing">
            
            <h3>Sorry, we couldn't find any related news.</h3>
          </div>
        )}
        {this.state.loading && <Loader />}
      </div>
    );
  }
}

News.propTypes = {
  symbol: PropTypes.string,
};

export default News;

