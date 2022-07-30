import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';

export default class News extends Component {


  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News360`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    console.log("cmd");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f811ee5e20ab4227acfa348703802b84&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f811ee5e20ab4227acfa348703802b84&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json()
    this.props.setProgress(60);
    console.log(parseData);
    this.setState({ articles: parseData.articles })
    this.props.setProgress(100);
  }


  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f811ee5e20ab4227acfa348703802b84&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
    })
    this.props.setProgress(100);
};


  render() {
    return (
      <div className='cm'>
        <h2 className='d-flex justify-content-center my-3'>
          <h1 className="text-center my-3">News360 - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner /></h4>} >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                  <Newsitem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
