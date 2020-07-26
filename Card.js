import React, {Component} from 'react';
import './App.css'
import data from './Data';

class Card extends Component{
    constructor(){
    super()

        this.state= {
            data:data,
            index:0
        }

        this.forward = this.forward.bind(this)
        this.backward = this.backward.bind(this)
    }


    forward(){
        var step = this.state.index
         if( this.state.index < this.state.data.length - 1 ){
          this.setState({ index:step + 1 })
        } else if (this.state.index = this.state.data.length){
            this.setState({index:1})
        }
    }


    backward(){
        var step = this.state.index
         if( this.state.index > 0 ){
          this.setState({ index:step - 1 })
        } else if (this.state.index = -1){
            this.setState({index:this.state.data.length-1})
        }
    }



    render(){
            let mappedData = this.state.data.map(item => {
            return <div key={item.id} item={item} />
            })
                
    return(
            <div className='directory' > 

                <div className='container' >

                    <h1 className='id' >  {mappedData[this.state.index].props.item.id}/25 </h1>
                    <h1 className='name' > {mappedData[this.state.index].props.item.name.first} {mappedData[this.state.index].props.item.name.last} </h1>
                    
                    <p className='info' > <strong>From:</strong> {mappedData[this.state.index].props.item.city}, {mappedData[this.state.index].props.item.country}</p>
                    <p className='info' > <strong>Job Title:</strong> {mappedData[this.state.index].props.item.title}</p>
                    <p className='info' > <strong>Employer</strong> {mappedData[this.state.index].props.item.employer}</p>

                    <p className='movies' ><strong>Favorite Movies:</strong></p>
                    <ol className='movies' >
                      <li>{mappedData[this.state.index].props.item.favoriteMovies[0]}</li>
                      <li>{mappedData[this.state.index].props.item.favoriteMovies[1]}</li>
                      <li>{mappedData[this.state.index].props.item.favoriteMovies[2]}</li>

                    </ol>

                </div>


                <div className='nav' >
                <a className='forBack' onClick={this.backward} > <strong> &lt; Previous </strong> </a>

                <div className='butts' >
                    <div className='blueNav' > <p> <strong> Edit </strong> </p></div>
                    <div className='blueNav' > <p> <strong> Delete </strong> </p></div>
                    <div className='blueNav' > <p> <strong> New </strong> </p></div>
                </div>

                <a className='forBack' onClick={this.forward} > <strong> Next &gt; </strong> </a>
                </div>

            </div>
        )

    }
}

export default Card;




// console.log(mappedData[0].props.item.city)