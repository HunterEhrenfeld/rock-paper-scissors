import React from 'react';
import Button from 'react-bootstrap/Button';

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      picked:false,
      choice1:[],
      choice2:[],
      score:0,
      total:0
    };
  }

  componentDidMount(){
    console.log(this.state.choice2)
    this.setState({choice2: parseInt((1+Math.random() * (3)))})
  }

  buttonClick(v){
    let choice;
    let opponent=this.state.choice2;
    if(v===1){
      if(opponent===1){
        choice=
        <div>
          <div>
            <b>You picked Rock</b>
          </div>
          <div>
           <b>Opponent picked Rock</b>
          </div>
          <div>
            <b>You tied</b>
          </div>
        </div>;
      }
      else if(opponent===2){
        choice=
        <div>
          <div>
            <b>You picked Rock</b>
          </div>
          <div>
           <b>Opponent picked Paper</b>
          </div>
          <div>
            <b>You Lose</b>
          </div>
        </div>;
        this.setState({
          total:this.state.total+1
        })
      }
      else if(opponent===3){
        choice=
        <div>
          <div>
            <b>You picked Rock</b>
          </div>
          <div>
           <b>Opponent picked Scissors</b>
          </div>
          <div>
            <b>You Win</b>
          </div>
        </div>;
        this.setState({
          total:this.state.total+1,
          score:this.state.score+1
        })
      }
      
    }
    if(v===2){
      if(opponent===1){
        choice=
        <div>
          <div>
            <b>You picked Paper</b>
          </div>
          <div>
           <b>Opponent picked Rock</b>
          </div>
          <div>
            <b>You Won</b>
          </div>
        </div>;
        this.setState({
          total:this.state.total+1,
          score:this.state.score+1
        })
      }
      else if(opponent===2){
        choice=
        <div>
          <div>
            <b>You picked Paper</b>
          </div>
          <div>
           <b>Opponent picked Paper</b>
          </div>
          <div>
            <b>You Tie</b>
          </div>
        </div>;
      }
      else if(opponent===3){
        choice=
        <div>
          <div>
            <b>You picked Paper</b>
          </div>
          <div>
           <b>Opponent picked Scissors</b>
          </div>
          <div>
            <b>You Lose</b>
          </div>
        </div>;
        this.setState({
          total:this.state.total+1
        })
      }
    }
    if(v===3){
      if(opponent===1){
        choice=
        <div>
          <div>
            <b>You picked Scissors</b>
          </div>
          <div>
           <b>Opponent picked Rock</b>
          </div>
          <div>
            <b>You Lose</b>
          </div>
        </div>;
        this.setState({
          total:this.state.total+1
        })
      }
      else if(opponent===2){
        choice=
        <div>
          <div>
            <b>You picked Scissors</b>
          </div>
          <div>
           <b>Opponent picked Paper</b>
          </div>
          <div>
            <b>You Win</b>
          </div>
        </div>;
        this.setState({
          total:this.state.total+1,
          score:this.state.score+1
        })
      }
      else if(opponent===3){
        choice=
        <div>
          <div>
            <b>You picked Scissors</b>
          </div>
          <div>
           <b>Opponent picked Scissors</b>
          </div>
          <div>
            <b>You Tie</b>
          </div>
        </div>;
      }
    }
    this.setState({
      picked:true,
      choice1:choice,
    })
    console.log(v)
  }

  playAgain(){
    // this.componentDidMount();
    this.setState({
        choice2: parseInt((1+Math.random() * (3))),
        choice1:[],
        picked:false
    })
  }
  render(){
    let selection;
    if(this.state.picked){
      selection = <div>{this.state.choice1}  <Button size="lg" onClick={this.playAgain.bind(this)}>Play Again</Button></div>
    }
    else{
      selection = <div>
      <Button size="lg" variant="outline-primary" onClick={this.buttonClick.bind(this,1)}>Rock</Button>
      <Button size="lg" variant="outline-primary" onClick={this.buttonClick.bind(this,2)}>Paper</Button>
      <Button size="lg" variant="outline-primary" onClick={this.buttonClick.bind(this,3)}>Scissors</Button></div>
    }
    return(
    <div>
      <div>You have won {this.state.score} out of {this.state.total} </div>
      {selection}
    </div>
    )
  }
}

export default Game;
