//calls named React Component, aka React.Component, will contain modular code to be exported to ./src/index.jsx

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
      success: 'alert alert-primary text-center',
      danger: '',
      changeDueStr: 'CHANGE DUE'
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);

  }

handleChange(event) {
  event.preventDefault();
  let name = event.target.name;
  let value  = event.target.value;
  this.setState({
    [name]: value,
  })

}

handleClick(event) {
event.preventDefault();
let amountDue = this.state.amountDue;
let amountReceived = this.state.amountReceived;
let changeDue = (amountReceived - amountDue).toFixed(2);


this.setState({
  amountDue: amountDue,
  amountReceived: amountReceived,
  changeDue: changeDue,
  changeDueStr: ('The total change due is $' + changeDue),
  balanceDue: ('Remaining balance of payment is $' + (changeDue*(-1)) ),
  twenties: Math.floor(changeDue / 20),
  tens: Math.floor((changeDue / 10) % 2),
  fives: Math.floor((changeDue / 5) % 2),
  ones: Math.floor(changeDue % 5),
  quarters: Math.floor(((changeDue * 100) % 100) / 25),
  dimes: Math.floor((((changeDue * 100) % 100) % 25) / 10),
  nickels: Math.floor(((((changeDue * 100) % 100) % 25) % 10) / 5),
  pennies: Math.floor((changeDue * 100) % 5 +0.01),
  success: 'alert alert-success text-center',
  danger: 'alert alert-danger text-center'
});

console.log(this.state.changeDue);
}

render() {
const amountDue = this.state.amountDue;
const amountReceived = this.state.amountReceived;
const changeDue = this.state.changeDue;
console.log(this.state.twenties);
var sign = 1;
var alarm = '';
var alarmStr = '';

  if (changeDue < 0) {
    alarm = this.state.danger;
    alarmStr = this.state.balanceDue;
    sign = (0);
    console.log(alarm);
    console.log(alarmStr);

}
else {
    alarm = this.state.success;
    alarmStr = this.state.changeDueStr;

      console.log(alarm);
      console.log(alarmStr);
}


return (

<div className='container-fluid'>
        <div className = 'page-header'>
            <h1 className='h1'>Change Calculator</h1>
            <hr className='style8'/>
        </div>
    <div className='row'>


{/* <!-- ++++++++++++++++++++++++++++++++++++++++++++ INPUTS +++++++++++++++++++++++++++++++++++   --> */}
        <div className='col-md-4'>

          <div className='card'>
           <div className='card-header'><strong>Enter Information:</strong> </div>
           <div className='card-body'>

             <label htmlFor='amountDue'><strong>Amount Due:</strong></label><br/>
             <input name='amountDue' type='number' className='col-10' onChange={this.handleChange} value={amountDue} placeholder='Enter Amount Due'/>

             <label htmlFor='amountReceived'><strong>Amount Received:</strong></label>
             <input name='amountReceived' type='number' className='input col-10' value={amountReceived} onChange={this.handleChange} placeholder='Enter Amount Received'/>
            </div>

            <div className='card-footer'>
             <button className='btn btn-primary' onClick={this.handleClick} >Calculate</button>
            </div>

          </div>
        </div>


{/* <!-- +++++++++++++++++++++++++++++++++++++ INDIVIDUAL OUTPUTS +++++++++++++++++++++++++++++++++++   --> */}
        <div className='col-md-8'>

          <div className='card'>
                <div className='card-body'>

                              <div className={ alarm }>
                                  <strong>{alarmStr}</strong>
                              </div><br/>

                    <div className='row'>
{/* <!-- +++++++++++++++++++++++++++++++++++++ PAPER MONEY +++++++++++++++++++++++++++++++++++   --> */}
                      <div className='col-md-3' name='twenty'>
                        <div className='card text-center md-faded col-md-12'>
                        <div className='id' >TWENTIES</div>
                        <div className='ans' name='twenty'>{this.state.twenties * sign}</div>
                       </div>
                      </div>

                      <div className='col-md-3' name='ten'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >TENS</div>
                          <div className='ans' name='ten'>{this.state.tens * sign}</div>
                        </div>
                        </div>

                        <div className='col-md-3'name='five'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >FIVES</div>
                          <div className='ans' name='five'>{this.state.fives * sign}</div>
                        </div>
                        </div>

                      <div className='col-md-3'name='one'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >ONES</div>
                          <div className='ans' name='one'>{this.state.ones * sign}</div>
                        </div>
                        </div>

                   </div>

                   <br/>
{/* <!-- +++++++++++++++++++++++++++++++++++++ COINS +++++++++++++++++++++++++++++++++++   --> */}
                    <div className='row'>

                  <div className='col-md-3' name='twenty'>
                    <div className='card text-center md-faded col-md-12'>
                    <div className='id' >QUARTERS</div>
                    <div className='ans' name='twenty'>{this.state.quarters * sign}</div>
                    </div>
                  </div>


                      <div className='col-md-3'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >DIMES</div>
                          <div className='ans' name='one'> {this.state.dimes * sign}</div>
                          </div>
                      </div>

                      <div className='col-md-3'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >NICKELS</div>
                          <div className='ans' name='one'> {this.state.nickels * sign}</div>
                      </div>
                      </div>

                      <div className='col-md-3'>
                          <div className='card text-center md-faded col-md-12'>
                        <div className='id' name='title' >PENNIES</div>
                        <div className='ans' name='one'> {this.state.pennies * sign}</div>
                        </div>
                    </div>
                    </div>
                   </div>


                </div>
                </div>
        </div>
</div>

    );

  }
}

export default App;

