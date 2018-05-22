import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(){
      super()
        this.state={
          numX: '0',
          numY: '0',
          numZ: '0',
        };
    }

    handleInputChange(event) {
      this.setState({
        numX : event.target.value 
       });
    }  

    handleInputChangeY(event) {
      this.setState({
        numY : event.target.value 
       });
    }  

    handleInputChangeZ(event) {
      this.setState({
        numZ : event.target.value 
       });
    }  

  

  render() {
    let positionContainer = {
      backgroundColor : 'black',
      width: (this.state.numZ),
      height: (this.state.numZ),
      marginLeft: (this.state.numY), 
      marginTop: (this.state.numX), 
      marginRight: 400,
	
    }
    
    let positionPrincipal = {
      marginRight: "0",
    }


    return (
      <div className="App">
        <header>
          <h1>Reto 2 para Leopark.</h1>
        </header>
        <h3>Ingresa un valor en los siguientes renglones donde:.</h3>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>valor de X:</label>
              <input type="number" value={this.state.numX} onChange={this.handleInputChange.bind(this)} placeholder="# . #" />
              <label> que recorre hacia la derecha.</label>
            </div>

            <div>
              <label>valor de Y:</label>
              <input type="number" value={this.state.numY} onChange={this.handleInputChangeY.bind(this)} placeholder="# . #" />
              <label> que recorre hacia abajo.</label>
            </div>

            <div>
              <label>valor de Z:</label>
              <input type="number" value={this.state.numZ} onChange={this.handleInputChangeZ.bind(this)} placeholder="# . #" />
              <label> que cambia el alto y ancho del cuadro.</label>
            </div>       
          </form>
          </div>

          <div id="cuadro">
            <div style={positionPrincipal}>
              <svg style={positionContainer}></svg> 
			      </div>
          </div>

          <footer>
            <p>Proyecto elaborado por Abigail Flores.</p>
          </footer>
        </div>

    );
  }
}

export default App;