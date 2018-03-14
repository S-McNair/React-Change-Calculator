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
      pennies: ''
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
  changeDueStr: ('Your total change due is: $' + changeDue),
  twenties: Math.floor(changeDue / 20),
  tens: Math.floor((changeDue / 10) % 2),
  fives: Math.floor((changeDue / 5) % 2),
  ones: Math.floor(changeDue % 5),
  quarters: Math.floor(((changeDue * 100) % 100) / 25),
  dimes: Math.floor((((changeDue * 100) % 100) % 25) / 10),
  nickels: Math.floor(((((changeDue * 100) % 100) % 25) % 10) / 5),
  pennies: Math.floor((changeDue * 100) % 5 + 0.01)
});


console.log(this.state.changeDue, this.state.amountDue);
}

  render() {
const amountDue = this.state.amountDue;
const amountReceived = this.state.amountReceived;

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
             <p>$ <input name='amountDue' type='number' className='col-10' onChange={this.handleChange} value={amountDue} placeholder='Enter Amount Due'/></p>

             <label htmlFor='amountReceived'><strong>Amount Received:</strong></label>
             <p>$  <input name='amountReceived' type='number' className='input col-10' value={amountReceived} onChange={this.handleChange} placeholder='Enter Amount Received'/></p>
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

                    <div className='card text-center success'>
                      <div className='card-body 'name='changeDue' >{this.state.changeDueStr} </div>
                  </div><br/>
                    <div className='row'>
{/* <!-- +++++++++++++++++++++++++++++++++++++ PAPER MONEY +++++++++++++++++++++++++++++++++++   --> */}
                      <div className="col-md-3" name='twenty'>
                        <div className='card text-center md-faded col-md-12'>
                        <div className='id' >TWENTIES</div>
                        <div className='ans' name='twenty'>{this.state.twenties}</div>
                       </div>
                      </div>

                      <div className="col-md-3" name='ten'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >TENS</div>
                          <div className='ans' name='ten'>{this.state.tens}</div>
                        </div>
                        </div>

                        <div className="col-md-3"name='five'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >FIVES</div>
                          <div className='ans' name='five'>{this.state.fives}</div>
                        </div>
                        </div>

                      <div className="col-md-3"name='one'>
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >ONES</div>
                          <div className='ans' name='one'>{this.state.ones}</div>
                        </div>
                        </div>

                   </div>

                   <br/>
{/* <!-- +++++++++++++++++++++++++++++++++++++ COINS +++++++++++++++++++++++++++++++++++   --> */}
                    <div className='row'>

                  <div className="col-md-3" name='twenty'>
                    <div className='card text-center md-faded col-md-12'>
                    <div className='id' >QUARTERS</div>
                    <div className='ans' name='twenty'>{this.state.quarters}</div>
                    </div>
                  </div>


                      <div className="col-md-3">
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >DIMES</div>
                          <div className='ans' name='one'> {this.state.dimes}</div>
                          </div>
                      </div>

                      <div className="col-md-3">
                          <div className='card text-center md-faded col-md-12'>
                          <div className='id' name='title' >NICKELS</div>
                          <div className='ans' name='one'> {this.state.nickels}</div>
                      </div>
                      </div>

                      <div className="col-md-3">
                          <div className='card text-center md-faded col-md-12'>
                        <div className='id' name='title' >PENNIES</div>
                        <div className='ans' name='one'> {this.state.pennies}</div>
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

