import React, { Component } from 'react';

class ListView extends Component {
  render() {
    return (
      <div class="w3-container">
        <header>
          <p>배송 리스트</p>
        </header>
          <div class="w3-container">
           <h5>Countries</h5>
           <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
             <tr>
            <td>United States</td>
            <td>65%</td>
             </tr>
             <tr>
            <td>UK</td>
            <td>15.7%</td>
             </tr>
             <tr>
            <td>Russia</td>
            <td>5.6%</td>
             </tr>
             <tr>
            <td>Spain</td>
            <td>2.1%</td>
             </tr>
             <tr>
            <td>India</td>
            <td>1.9%</td>
             </tr>
             <tr>
            <td>France</td>
            <td>1.5%</td>
             </tr>
           </table>
           <button class="w3-button w3-dark-grey">More Countries  <i class="fa fa-arrow-right"></i></button>
           </div>
          </div>
    );
  }
}

export default ListView;