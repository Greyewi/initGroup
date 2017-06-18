import React, { Component } from 'react';
import {Table} from 'react-bootstrap/lib';
import axios from 'axios';
import IconChange from '../IconChange.js';

const TENDER_LIST = 'http://crossorigin.me/https://dev.initpro.ru/applicants/Table1.json';

export default class First extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortName = this.handleSortName.bind(this);
        this.handleSortPhase = this.handleSortPhase.bind(this);
        this.handleSortRegionName = this.handleSortRegionName.bind(this);
        this.handleSortSubcategory = this.handleSortSubcategory.bind(this);
        this.handleSortPublicationDate = this.handleSortPublicationDate.bind(this);
        this.handleSortPrice = this.handleSortPrice.bind(this);
        this.state = {
            tenders : null,
            searchString: '',
            sortByName: null,
            sortByPhase: null,
            sortByRegionName: null,
            sortBySubcategory: null,
            sortByPublicationDate: null,
            sortByPrice: null
        };
    }

    componentDidMount = () => {
        let _this = this;
        axios.get(TENDER_LIST)
            .then(function (response) {
                //console.log(response.data);
                _this.setState({tenders: response.data.tenders});
            });
    };

    handleSortName(){
        let sortArray = this.state.tenders;
        let _this = this;
        sortArray.sort(function(a, b) {
            let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            nameA[0] === '"' ? nameA = nameA.slice(1) : false;
            nameB[0] === '"' ? nameB = nameB.slice(1) : false;

            if(_this.state.sortByName){
                _this.setState({sortByName: !_this.state.sortByName});
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            } else {
                _this.setState({sortByName: !_this.state.sortByName});
                if (nameA < nameB) return 1;
                if (nameA > nameB) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByPhase: null,
            sortByRegionName: null,
            sortBySubcategory: null,
            sortByPublicationDate: null,
            sortByPrice: null
        });
    }

    handleSortPhase(){
        let sortArray = this.state.tenders;
        let _this = this;
        sortArray.sort(function(a, b) {
            if(_this.state.sortByPhase){
                _this.setState({sortByPhase: !_this.state.sortByPhase});
                if (a.phase.toLowerCase() < b.phase.toLowerCase()) return -1;
                if (a.phase.toLowerCase() > b.phase.toLowerCase()) return 1;
                return 0;
            } else {
                _this.setState({sortByPhase: !_this.state.sortByPhase});
                if (a.phase.toLowerCase() < b.phase.toLowerCase()) return 1;
                if (a.phase.toLowerCase() > b.phase.toLowerCase()) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByRegionName: null,
            sortBySubcategory: null,
            sortByPublicationDate: null,
            sortByPrice: null
        });
    }

    handleSortRegionName(){
        let sortArray = this.state.tenders;
        let _this = this;
        sortArray.sort(function(a, b) {
            if(_this.state.sortByRegionName){
                _this.setState({sortByRegionName: !_this.state.sortByRegionName});
                if (a.regionName.toLowerCase() < b.regionName.toLowerCase()) return -1;
                if (a.regionName.toLowerCase() > b.regionName.toLowerCase()) return 1;
                return 0;
            } else {
                _this.setState({sortByRegionName: !_this.state.sortByRegionName});
                if (a.regionName.toLowerCase() < b.regionName.toLowerCase()) return 1;
                if (a.regionName.toLowerCase() > b.regionName.toLowerCase()) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByPhase: null,
            sortBySubcategory: null,
            sortByPublicationDate: null,
            sortByPrice: null
        });
    }

    handleSortSubcategory(){
        let sortArray = this.state.tenders;
        let _this = this;
        sortArray.sort(function(a, b) {
            if(_this.state.sortBySubcategory){
                _this.setState({sortBySubcategory: !_this.state.sortBySubcategory});
                if (a.subcategory.toLowerCase() < b.subcategory.toLowerCase()) return -1;
                if (a.subcategory.toLowerCase() > b.subcategory.toLowerCase()) return 1;
                return 0;
            } else {
                _this.setState({sortBySubcategory: !_this.state.sortBySubcategory});
                if (a.subcategory.toLowerCase() < b.subcategory.toLowerCase()) return 1;
                if (a.subcategory.toLowerCase() > b.subcategory.toLowerCase()) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByPhase: null,
            sortByRegionName: null,
            sortByPublicationDate: null,
            sortByPrice: null
        });
    }


    handleSortPublicationDate(){
        let sortArray = this.state.tenders;
        let _this = this;
        sortArray.sort(function(a, b) {
            let dateArrA = a.publicationdate.split('.'), dateArrB = b.publicationdate.split('.') ;
            if(_this.state.sortByPublicationDate){
                _this.setState({sortByPublicationDate: !_this.state.sortByPublicationDate});
                if (new Date(dateArrA[2], dateArrA[1]-1, dateArrA[0]-1).getTime() < new Date(dateArrB[2], dateArrB[1]-1, dateArrB[0]-1).getTime()) return -1;
                if (new Date(dateArrA[2], dateArrA[1]-1, dateArrA[0]-1).getTime() > new Date(dateArrB[2], dateArrB[1]-1, dateArrB[0]-1).getTime()) return 1;
                return 0;
            } else {
                _this.setState({sortByPublicationDate: !_this.state.sortByPublicationDate});
                if (new Date(dateArrA[2], dateArrA[1]-1, dateArrA[0]-1).getTime() < new Date(dateArrB[2], dateArrB[1]-1, dateArrB[0]-1).getTime()) return 1;
                if (new Date(dateArrA[2], dateArrA[1]-1, dateArrA[0]-1).getTime() > new Date(dateArrB[2], dateArrB[1]-1, dateArrB[0]-1).getTime()) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByPhase: null,
            sortByRegionName: null,
            sortBySubcategory: null,
            sortByPrice: null
        });
    }

    handleSortPrice(){
        let sortArray = this.state.tenders;
        let _this = this;
        sortArray.sort(function(a, b) {
            let priceA = a.price.replace(/\s+/g, ""), priceB = b.price.replace(/\s+/g, "");
            let reg=/[А-я]+/g;

            reg.test(priceA) ? priceA = -1 : false;
            reg.test(priceB) ? priceB = -1 : false;

            if(_this.state.sortByPrice){
                _this.setState({sortByPrice: !_this.state.sortByPrice});
                if (parseInt(priceA,10) < parseInt(priceB,10)) return -1;
                if (parseInt(priceA,10) > parseInt(priceB,10)) return 1;
                return 0;
            } else {
                _this.setState({sortByPrice: !_this.state.sortByPrice});
                if (parseInt(priceA,10) < parseInt(priceB,10)) return 1;
                if (parseInt(priceA,10) > parseInt(priceB,10)) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByPhase: null,
            sortByRegionName: null,
            sortBySubcategory: null,
            sortByPublicationDate: null
        });
    }

    handleSearch(event){
        this.setState({searchString:event.target.value});
    }

    render() {
        let searchItems = this.state.tenders, searchString = this.state.searchString.toLowerCase().trim(), filterTenders = [];
        if(searchString.length > 0){
            searchItems.filter(function(l){
                if(l.name.toLowerCase().match(searchString)){
                    filterTenders.push(l);
                }
            });
        } else {
            filterTenders = this.state.tenders;
        }

        return (
            <div className="main-wrapper">
                <FirstTable
                    data={this.state}
                    filterTenders={filterTenders}
                    handleSearch={this.handleSearch}
                    handleSortName={this.handleSortName}
                    handleSortPhase={this.handleSortPhase}
                    handleSortRegionName={this.handleSortRegionName}
                    handleSortSubcategory={this.handleSortSubcategory}
                    handleSortPublicationDate={this.handleSortPublicationDate}
                    handleSortPrice={this.handleSortPrice}
                />
            </div>
        );
    }
}

function FirstTable(props) {
    if(props.data.tenders){
        return(
            <div className="table-container">
                <span className="search-input_container">
                    Search <input className="search-input" onChange={props.handleSearch} placeholder="Search by name"/>
                </span>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>
                            <span>Name</span>
                            <span onClick={props.handleSortName}> {new IconChange(props.data.sortByName).getImg()} </span>
                        </th>
                        <th>
                            <span>Phase</span>
                            <span onClick={props.handleSortPhase}> {new IconChange(props.data.sortByPhase).getImg()}</span>
                        </th>
                        <th>
                            <span>Region</span>
                            <span onClick={props.handleSortRegionName}> {new IconChange(props.data.sortByRegionName).getImg()}</span>
                        </th>
                        <th>
                            <span>Category</span>
                            <span onClick={props.handleSortSubcategory}> {new IconChange(props.data.sortBySubcategory).getImg()}</span>
                        </th>
                        <th>
                            <span>Date</span>
                            <span onClick={props.handleSortPublicationDate}> {new IconChange(props.data.sortByPublicationDate).getImg()}</span>
                        </th>
                        <th>
                            <span>Price</span>
                            <span onClick={props.handleSortPrice}> {new IconChange(props.data.sortByPrice).getImg()}</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.filterTenders.map((item, i) =>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.phase}</td>
                            <td>{item.regionName}</td>
                            <td>{item.subcategory}</td>
                            <td>{item.publicationdate}</td>
                            <td>{item.price}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    } else {
        return(
            <span>Loading</span>
        )
    }
}








