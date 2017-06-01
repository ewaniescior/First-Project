import React from 'react';
import ReactDOM from 'react-dom';
/*
Stwórz komponent PizzaToppings. Ma wyświetlać dwie listy ul
w elemencie div. Na pierwszej domyślnie znajdują się:
Sos pomidorowy, Ananas, Kukurydza, Pomidor. Na drugiej nic.
Po kliknięciu na dowolny
 element przenosi on się z pierwszej listy na drugą.
*/
class Beer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            answer1: false,
            answer2: false,
            answer3: true,
            answer4: true,
            answer5: true,
            answer6: true,
            answer7: true,
            answer8: true,
            answer9: true,
            answer10: true,
            answer11: true,
            answer12: true,
            answer13: true,
            answer14: true,
            answer15: true,
            answer16: true,
            answer17: true,
            answer18: true,
            answer19: true,
            answer20: true,
            answer21: true,
            answer22: true,
            answer23: true,
            answer24: true
        }
    }
    handleClick = (event) => {
        this.setState({answer: event.target.checked});
    }

    render() {

        return (

            <div>
                <p>1.Czy lubisz owoce cytrusowe?</p>
                <label>tak<input type="radio" name="ipa-owoce" value={this.state.answer1} onChange={this.handleClick} onChange={this.handleClick}/></label>

                <label>nie<input type="radio" name="ipa-owoce" value={this.state.answer1} onChange={this.handleClick}/>
                </label>

                <p>2.Czy lubisz kawę lub kakao?</p>
                <label>tak<input type="radio" name="porter-kawa" value={this.state.answer2} onChange={this.handleClick}/></label>
                <label>nie<input type="radio" name="porter-kawa" value={this.state.answer2} onChange={this.handleClick}/>
                </label>

                <p>3.Czy lubisz banany lub goździki?</p>
                <label>tak<input type="radio" name="pszeniczne-banany" value={this.state.answer5} onChange={this.handleClick}/></label>
                <label>nie<input type="radio" name="pszeniczne-banany" value={this.state.answer6} onChange={this.handleClick}/>
                </label>

                <p>4.Czy preferujesz tradycyjne smaki (nie lubisz eksperymentować )?</p>
                <label>tak<input type="radio" value={this.state.answer7} onChange={this.handleChange} name="lager-tradycja"/></label>
                <label>nie<input type="radio" value={this.state.answer8} onChange={this.handleChange} name="lager-tradycja"/>
                </label>

                <p>5.Czy lubisz owoce?</p>
                <label>tak<input type="radio" value={this.state.answer9} onChange={this.handleClick} name="smakowe-owoce"/></label>
                <label>nie<input type="radio" value={this.state.answer10} onChange={this.handleClick} name="smakowe-owoce"/>
                </label>

                <p>6.Czy lubisz aromat ciemnego pieczywa?</p>
                <label>tak<input type="radio" value={this.state.answer11} onChange={this.handleClick} name="bock-pieczywo"/></label>
                <label>nie<input type="radio" value={this.state.answer12} onChange={this.handleClick} name="bock-pieczywo"/>
                </label>

                <p>7.Czy lubisz gorzką herbatę lub kawę?</p>
                <label>tak<input type="radio" value={this.state.answer13} onChange={this.handleClick} name="ipa-gorzki"/></label>
                <label>nie<input type="radio" value={this.state.answer14} name="ipa-gorzki" onChange={this.handleClick}/>
                </label>

                <p>8.Czy lubisz mocniejsze trunki?</p>
                <label>tak<input type="radio" value={this.state.answer16} name="alkohol-porter" onChange={this.handleClick}/></label>
                <label>nie<input type="radio" value={this.state.answer17} name="alkohol-porter" onChange={this.handleClick}/>
                </label>

                <p>9.Czy w napojach szukasz orzeźwienia?</p>
                <label>tak<input type="radio" value={this.state.answer18} name="pszeniczne-orzezwienie" onChange={this.handleClick}/></label>

                <label>nie<input type="radio" value={this.state.answer19} name="pszeniczne-orzezwienie" onChange={this.handleClick}/>
                </label>

                <p>10.Czy kwestią priorytetową podczas zakupów spożywczych jest ich niższa cena?
                </p>
                <label>tak<input type="radio" value={this.state.answer20} name="lager-cena" onChange={this.handleClick}/></label>
                <label>nie<input type="radio" value={this.state.answer21} name="lager-cena" onChange={this.handleClick}/>
                </label>

                <p>11.Czy lubisz piwo :)?</p>
                <label>tak<input type="radio" value={this.state.answer22} name="smakowe-piwo" onChange={this.handleClick}/></label>
                <label>nie<input type="radio" value={this.state.answer23} name="smakowe-piwo" onChange={this.handleClick}/>
                </label>

                <p>12.Czy lubisz kwas chlebowy?</p>
                <label>tak<input type="radio" value={this.state.answer24} name="kwas-bock" onChange={this.handleClick}/></label>
                <label>nie<input type="radio" value={this.state.answer25} name="kwas-bock" onChange={this.handleClick}/>
                </label>
            </div>
        );
    }
}
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Beer/>, document.getElementById('app'));
});
