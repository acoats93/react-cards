import React from 'react';
import data from '../../data';
import Buttons from '../Buttons/Buttons'
import './Contents.css';

class Contents extends React.Component {
    constructor(){
        super()
        this.state = {
            cards: data,
            index: 0
        }
    }

    clickNext = () => {
        console.log('click')
        if(this.state.index === 24){
            this.setState({index: 0})
        }else{
            this.setState({index: this.state.index += 1})
        }
    }

    clickPrev = () => {
        console.log('click')
        if(this.state.index === 0){
            this.setState({index: 24})
        }else{
            this.setState({index: this.state.index -= 1});
        }
    }

    render(){
        console.log(this.state.index)
        const {index, cards} = this.state;
        return(
            <section id='background_area'>
                        <div id='whole_card'>
                        <div id='num'>{cards[index].id}/25</div>
                            <section>
                                <div id='name'>{cards[index].name.first} {cards[index].name.last}</div>
                                <section id='person_info'>
                                    <div>FROM: {cards[index].city} {cards[index].country}</div>
                                    <div>JOB TITLE: {cards[index].title}</div>
                                    <div>EMPLOYER: {cards[index].employer}</div>
                                </section>
                                <ol id='movie_list'>FAVORITE MOVIES:
                                    <li>{cards[index].favoriteMovies[0]}</li>
                                    <li>{cards[index].favoriteMovies[1]}</li>
                                    <li>{cards[index].favoriteMovies[2]}</li>
                                </ol>
                            </section>
                        </div>
                <Buttons
                    clickNext={this.clickNext}
                    clickPrev={this.clickPrev}
                />
            </section>
        )
    }
}

export default Contents;