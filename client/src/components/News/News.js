import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import "./style.css";
// import StockSelect, {symbol} from "./components/Search";
require("dotenv").config();

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
  getLatestNews(newSymbol) {
    fetch(
      `https://cloud.iexapis.com/stable/stock/${
        newSymbol || this.props.symbol || "AAPL"
      }/news/2?token=` + process.env.REACT_APP_API_KEY_1
    )
      .then((res) => res.json())
      .then((result) => {
        for (let i = 0; i < 3; i++) {
          if (typeof result[parseInt(i)] !== "undefined") {
            let date = Date(result[parseInt(i)].datetime).toString().split(" ");
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
              document.querySelector("#img" + i).style = newsImage[parseInt(i)];
            }
          }
        }, 1000);
      })
      .then(() => {
        if (this._isMounted) {
          this.setState({ loading: false });
        }
      });
  }
  componentDidMount() {
    this._isMounted = true;
    this.getLatestNews();
  }
  UNSAFE_componentWillReceiveProps({ symbol }) {
    this.getLatestNews(symbol);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div className=" text-center" id="maincontain">
        {newsHeadline.map((val, indx) => {
          return (
            <a
              href={newsUrl[parseInt(indx)]}
              target="_blank"
              rel="noopener noreferrer"
              key={indx}
            >
              <div className="row-col-sm article mt-2">
                <div className="article__image" id={"img" + indx} />
                <div className="article__content">
                  <div className="article__top">
                    {/* <h5>{newsDate[parseInt(indx)]}</h5> */}
                    <div className="row col-sm p-5">
                      <div className="">
                        <img
                          id="articleImage"
                          style={{
                            width: "350px",
                            height: "200px",
                            padding: "0",
                            // border: "1px solid #26B3A4",
                          }}
                          src={newsImage[parseInt(indx)]}
                        />
                      </div>
                      <div className="col-sm text-left">
                        <p
                          id="latestHeadline"
                          className="fontMe font-weight-bolder "
                          style={{ color: "#26B3A4" }}
                        >
                          {val}
                        </p>
                        <p
                          id="articleText"
                          className="fontMe mt-2"
                          style={{ color: "white", fontSize: "16px" }}
                        >
                          {newsSummary[parseInt(indx)]}........
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            </a>
          );
        })}
        {newsHeadline.length === 0 && !this.state.loading && (
          <div className="fontMeSmall news__nothing">
            <h3>Sorry, no recent articles at this time.</h3>
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
