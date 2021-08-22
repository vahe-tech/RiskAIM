import styled from 'styled-jss'

.td[name='actuallevel'], .td[name='scheduledlevel'], .td[name='baselinelevel']{
    text-align: center;
    width:  25px;
}


.invalid{
    outline: solid 1px darkred;
    background-color: pink;
}

.tbl.events td.cell{
    text-align: left;
}
     
.th.header{
    background-color: #0038a8;
    font-weight: bold;
    font-style: italic;
    color: white;
    text-align: left;
}

div.nopadding{
    padding: 0px;
}

@media only screen and (min-width: 801px){
    
    br.showmobile{
        display: none;
    }
    
    div.select2{
        width: 170px;
        margin-right: 3px;
    }
     
    div.widthAuto{
        width: 100%;
    }
    
    div.width50{
        width: 50px;
        display: inline-block;
    }
    
    .td.header{
        display: none;
        width: 0px;
        border: none;
    }
    
    input.date-input{
        width: 96px;
        margin-top: 3px;
    }
    
    input.level{
        width: 31px;
        height:  30px;
        text-align: center;
    }   

    input.title{
        width: 142px;
        height: 30px;
        margin-top: 3px;
    }
    
    .tbl#summary .td.label, .td.locked{
        width: 25%;
    }
    
    .tbl#summary .td.label,
    .tbl#details .td.label {
        background-color: #0038a8;
        font-weight: bold;
        font-style: italic;
        color: white;
        text-align: left;
    }

    .tbl.layout#details > .tr:not(:first-child):not(.text) > .td.read > div
    {
        height: 97px;
        max-height: 97px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
 
    .tbl.layout#details > .tr:not(:first-child):not(.text) > .td.label
    {
        padding: 1px;
        height: 97px;
        width: 200px;
    }


    .tbl.layout#details > .td:nth-child(1){
        width: 150px;
    }

    .tbl.layout#information > .tr  > .td
    {
        height:  23px;
    }
    .tbl.layout#categories >  .tr >  .td
    {
        height: 23px;
    }
                      
    .tbl.layout#summary >  .td.locked
    {
        vertical-align: middle;
        color: black;
        width: 140px;
        text-align: left;
    }


    .tbl.layout#details   .tr:not(:first-child):not(.text)   .td.locked  div{
        height: 97px;
    }
                                             
    .tbl.layout#details{
        width: 650px;
        max-width: 650px;
    }

    .tbl.layout#details .td.label{
        width: 10%;   
    }

    .tbl.layout#summary{
        width: 650px;
        max-width: 555px;
    }
   
 
    .tbl.events .tr .th:nth-child(2), 
    .tbl.events .tr .td:nth-child(2){
        max-width: 10px;
        min-width: 10px;
    }
    
     .tbl.events   .tr   .th:nth-child(4),
    .tbl.events     .tr   .td:nth-child(4){
        max-width: 115px;
        min-width: 115px;
    }

    .tbl.events   .tr   .th:nth-child(6),
    .tbl.events     .tr   .td:nth-child(6){
        max-width: 137px;
        min-width: 137px;
    }


    .tbl.events .tr   .th:nth-child(8),
    .tbl.events   .tr  .td:nth-child(8){
        max-width: 100px;
        min-width: 100px;
    }
    
      .tbl.events   .tr   .th:nth-child(10),
    .tbl.events     .tr   .td:nth-child(10){
        max-width: 46px;
        min-width: 46px;
        text-align: center;
    }

    .tbl.events   .tr   .th:nth-child(12),
    .tbl.events     .tr   .td:nth-child(12){
        max-width: 27.5px;
        min-width: 27.5px;
    }


    .tbl.events   .tr   .th:nth-child(14),
    .tbl.events     .tr   .td:nth-child(14){
        max-width: 27.5px;
        min-width: 27.5px;
    }

    .tbl.events   .tr   .th:nth-child(16),
    .tbl.events     .tr   .td:nth-child(16){
        max-width: 27.5px;
        min-width: 27.5px;
    }       
    .tbl.events   .tr   .th:nth-child(18),
    .tbl.events     .tr   .td:nth-child(18){
        max-width: 27.5px;
        min-width: 27.5px;
    }                                     
    
    .tbl.events   .tr   .th:nth-child(20),
    .tbl.events    .tr   .td:nth-child(20){
        max-width: 100px;
        min-width: 100px;
    }
    
        
      .tbl.events   .tr   .th:nth-child(22),
    .tbl.events     .tr   .td:nth-child(22){
        max-width: 46px;
        min-width: 46px;
        text-align: center;
    }

    .tbl.events   .tr   .th:nth-child(24),
    .tbl.events     .tr   .td:nth-child(24){
        max-width: 27.5px;
        min-width: 27.5px;
    }


    .tbl.events   .tr   .th:nth-child(26),
    .tbl.events     .tr   .td:nth-child(26){
        max-width: 27.5px;
        min-width: 27.5px;
    }

    .tbl.events   .tr   .th:nth-child(28),
    .tbl.events     .tr   .td:nth-child(28){
        max-width: 27.5px;
        min-width: 27.5px;
    }       
    .tbl.events   .tr   .th:nth-child(30),
    .tbl.events     .tr   .td:nth-child(30){
        max-width: 27.5px;
        min-width: 27.5px;
    }  
    
    .tbl.events   .tr   .th:nth-child(32),
    .tbl.events    .tr   .td:nth-child(32){
        max-width: 100px;
        min-width: 100px;
    }
    
          .tbl.events   .tr   .th:nth-child(34),
    .tbl.events     .tr   .td:nth-child(34){
        max-width: 46px;
        min-width: 46px;
        text-align: center;
    }

    .tbl.events   .tr   .th:nth-child(36),
    .tbl.events     .tr   .td:nth-child(36){
        max-width: 27.5px;
        min-width: 27.5px;
    }


    .tbl.events   .tr   .th:nth-child(38),
    .tbl.events     .tr   .td:nth-child(38){
        max-width: 27.5px;
        min-width: 27.5px;
    }

    .tbl.events   .tr   .th:nth-child(40),
    .tbl.events     .tr   .td:nth-child(40){
        max-width: 27.5px;
        min-width: 27.5px;
    }       
    .tbl.events   .tr   .th:nth-child(42),
    .tbl.events     .tr   .td:nth-child(42){
        max-width: 27.5px;
        min-width: 27.5px;
    } 

       .tbl.events   .tr   .th:nth-child(44),
    .tbl.events     .tr   .td:nth-child(44){
        max-width: 45.5px;
        min-width: 45.5px;
    } 
    
     
    .tbl.events   .tr   .th:nth-child(48),
    .tbl.events     .tr   .td:nth-child(48){
        max-width: 45.5px;
        min-width: 45.5px;
    }
    

    .tbl{
        display: table;
        width: 1720px;
        margin: 0 auto;
    }
    
    .tr {
        display: table-row;
        width: 100%;                                                   `
        height:  39px;
    }
    
    .td, .th{
        display: table-cell;
        text-align: left;
        border: 0.5px solid black;
        vertical-align: middle;
    }
    
    .td:not(.riskvalue)
    {
        padding-left: 3px;
    }
    
    .td.riskvalue
    {
        padding-left: 0px;
    }
    
    .td div{
        /* text-align: left; */
    }
    
    p.input-group{
        width: 74px;
    }
    
    .th.placeholder{
        border:  none;
        display: none;
    }
 
}     


   

@media only screen and (max-width: 800px) {

    div.events .tbl{
        overflow-x: scroll;
    }

    .tr.event{
        display: table-cell;
        min-width: 100vw;
    }

    .td.locked{
        text-align: left;
    }  
           
    div.width200{
        width: 200px;  
    }

    .tbl.events .tr .td.header, .tbl.events .tr .td.value:not(.buttonvalue), .tbl.events .tr .td[name="actuallevel"], .tbl.events .tr .td[name="baselinelevel"], .tbl.events .tr .td[name="scheduledlevel"], .tbl.events .tr .td.left{
        width: 200px;
    }

    div.nested table#details > tr:not(:nth-child(2)) > td:first-child{
        width: 400px;
    }
    
    div.nested div.info{
        margin-left: 0;
    }
      
    div.nested table#details,
    div.nested div#level{
        width: 151px;
        margin-left: 35px;
    }
    
    div#level{
        height: 24px;
        margin-bottom: 10px;
    }

    .tbl#summary > .td.label,
    .tbl#details > .td.label,
    .tbl.events > .td.header{
        background-color: #0038a8;
        font-weight: bold;
        font-style: italic;
        color: white;
        text-align: left;
    }    

    /* Force table to not be like tables anymore */    
    .tbl{
        display: block;
        width: 100%;
    }

    .tbl .td.header, .tbl .td.label{
        background-color: #0038a8;
        font-weight: bold;
        font-style: italic;
        color: white;
        text-align: right;
    }
    
    .th.header{
        display: none;
    }
    
    .tbl.events{
        width: 100%;
    }
    
    .tbl .td input[type='search']{
        width: 100%;
    }
    
    .td.header{
        padding-top: 5px;
        height: 35px;
    }

    .td.buttonlabel, .td.buttonvalue-hide{
        display:none;
        width: 0px;
    }
    
    .td.buttonvalue{
        display: inline;
        margin: 0 auto;
        text-align: center;
    }
    
    .td.value.center{
        text-align: left;
    }
    
    .tbl.events .td.header,
    .tbl.events .td.value:not(.buttonvalue),
    .tbl#details .td.label,
    .tbl#details .td.locked,
    .tbl#summary .td.label,
    .tbl#summary .td.locked
    {
        display: inline-block;
        min-width: 40vw;
         width: 100px;
    }

   
    div.ui-view form {
        /* width: 98%; */
        padding: 0px;
        /* padding-right: 5vw; */
        margin:  0 auto;
    }
    
    input:not([type=button]), textarea{
        width: 100%;
    }                           
     
    .tbl#details >  .tr:not(:first-child) > .td.label{
        height: 23px;
    }
    
    input.date-input{
        width: 190px;
    }

    

    
    .select2-container,
    .select2-drop,
    .select2-search,
    .select2-search input{
        width: 100%;
    }
} 


.select2-result-label > div{
    text-align: left;
}

.select2-chosen{
    text-align: left;
}

.select2-search{
    width: 100%;
}

.select2 > .select2-choice.ui-select-match {
    /* Because of the inclusion of Bootstrap */
    height: 29px;
}

.selectize-control > .selectize-dropdown {
    top: 36px;
}
/* Some additional styling to demonstrate that append-to-body helps achieve the proper z-index layering. */
.select-box {
  background: #fff;
  position: relative;
  z-index: 1;
}
.alert-info.positioned {
  margin-top: 1em;
  position: relative;
  z-index: 10000; /* The select2 dropdown has a z-index of 9999 */
}
/*
     
.full button span {
    background-color: limegreen;
    border-radius: 32px;
    color: black;
  }
  .partially button span {
    background-color: orange;
    border-radius: 32px;
    color: black;
  }
  */

.fa-svg-icon > svg {
    position: relative;
    top: 0px;
    left: 0px;
    width: 26px;
    height: 26px;
}

p.input-group{
    text-align: left;
}
