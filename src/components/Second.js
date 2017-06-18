import React, { Component } from 'react';
import {Table} from 'react-bootstrap/lib';
import axios from 'axios';
import IconChange from '../IconChange.js';

const COMPANY_LIST = 'http://crossorigin.me/https://dev.initpro.ru/applicants/Table2.json';

export default class First extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSortName = this.handleSortName.bind(this);
        this.handleSortInn = this.handleSortInn.bind(this);
        this.handleSortKpp = this.handleSortKpp.bind(this);
        this.state = {
            companies : null,
            searchString: '',
            sortByName: null,
            sortByInn: null,
            sortByKpp: null
        };
    }

    componentDidMount = () => {
        let _this = this;
        axios.get(COMPANY_LIST)
            .then(function (response) {
                //console.log(response.data);
                _this.setState({companies: response.data.companies});
            })
    };

    handleSortName(){
        let sortArray = this.state.companies;
        let _this = this;
        sortArray.sort(function(a, b) {
            if(_this.state.sortByName){
                _this.setState({sortByName: !_this.state.sortByName});
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            } else {
                _this.setState({sortByName: !_this.state.sortByName});
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByInn: null,
            sortByKpp: null
        });
    }

    handleSortInn(){
        let sortArray = this.state.companies;
        let _this = this;
        sortArray.sort(function(a, b) {
            let innA = a.inn, innB = b.inn;
            innA === "-" ? innA = -1 : false;
            innB === "-" ? innB = -1 : false;

            if(_this.state.sortByInn){
                _this.setState({sortByInn: !_this.state.sortByInn});
                if (innA < innB) return -1;
                if (innA > innB) return 1;
                return 0;
            } else {
                _this.setState({sortByInn: !_this.state.sortByInn});
                if (innA < innB) return 1;
                if (innA > innB) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByKpp: null
        });
    }

    handleSortKpp(){
        let sortArray = this.state.companies;
        let _this = this;
        sortArray.sort(function(a, b) {
            let innA = a.kpp, innB = b.kpp;
            innA === "-" ? innA = -1 : false;
            innB === "-" ? innB = -1 : false;

            if(_this.state.sortByKpp){
                _this.setState({sortByKpp: !_this.state.sortByKpp});
                if (innA < innB) return -1;
                if (innA > innB) return 1;
                return 0;
            } else {
                _this.setState({sortByKpp: !_this.state.sortByKpp});
                if (innA < innB) return 1;
                if (innA > innB) return -1;
                return 0;
            }
        });
        this.setState({
            tenders: sortArray,
            sortByName: null,
            sortByInn: null
        });
    }

    handleSearch(event){
        this.setState({searchString:event.target.value});
        console.log(event.target.value);
    }

    render() {
        let searchItems = this.state.companies, searchString = this.state.searchString.toLowerCase().trim(), filterCompanies = [];
        if(searchString.length > 0){
            searchItems.filter(function(l){
                if(l.name.toLowerCase().match(searchString)){
                    filterCompanies.push(l);
                }
            });
        } else {
            filterCompanies = this.state.companies;
        }

        return (
            <div className="main-wrapper">
                <SecondTable
                    data={this.state}
                    handleSortName={this.handleSortName}
                    handleSortInn={this.handleSortInn}
                    handleSortKpp={this.handleSortKpp}
                    filterCompanies={filterCompanies}
                    handleSearch={this.handleSearch}
                />
            </div>
        );
    }
}

function SecondTable(props) {
    if(props.data.companies){
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
                            <span>INN</span>
                            <span onClick={props.handleSortInn}> {new IconChange(props.data.sortByInn).getImg()}</span>
                        </th>
                        <th>
                            <span>KPP</span>
                            <span onClick={props.handleSortKpp}> {new IconChange(props.data.sortByKpp).getImg()}</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.filterCompanies.map((item, i) =>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.inn}</td>
                            <td>{item.kpp}</td>
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
