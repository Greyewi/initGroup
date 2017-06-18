import React, { Component } from 'react';
import FaSort from 'react-icons/lib/fa/sort';
import FaSortAmountAsc from 'react-icons/lib/fa/sort-amount-asc';
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc';

export default class IconChange extends Component{
    constructor(sortState) {
        super(sortState);
        this.sortState = sortState;
        this.getImg = this.getImg.bind(this);
    }

    getImg(){
        if(this.sortState === null){
            return( <FaSort/> );
        } else if(this.sortState === false){
            return( <FaSortAmountAsc/> );
        } else if(this.sortState){
            return( <FaSortAmountDesc/> );
        }
    }
}