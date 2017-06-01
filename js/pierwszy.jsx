import React from 'react';
import ReactDOM from 'react-dom';

class Beer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        selectOption: " "

        }
    }


handleOptionChange =(changeEvent)=> {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}
handleFormSubmit= (formSubmitEvent)=> {
  formSubmitEvent.preventDefault();

  console.log('You have selected:', this.state.selectedOption);
}


    render() {

        return (
           <div>
               <form onSubmit={this.handleFormSubmit}>
                <p>1.Czy lubisz owoce cytrusowe?</p>
                <label>tak<input type="radio" name="ipa-owoce" value="tak"

                     onChange={this.handleOptionChange}/></label>
                 <label>nie<input type="radio" name="ipa-owoce" value="nie"

                    onChange={this.handleOptionChange}/></label>




                <p>2.Czy lubisz kawę lub kakao?</p>
                <label>tak<input type="radio" name="porter-kawa" value="tak" onChange={this.handleOptionChange}/></label>
                <label>nie<input type="radio" name="porter-kawa" value="nie "onChange={this.handleOptionChange}/>
                </label>

                <p>3.Czy lubisz banany lub goździki?</p>
                <label>tak<input type="radio" name="pszeniczne-banany"
                    value="tak"
                onChange={this.handleOptionChange}/></label>
            <label>nie<input type="radio" name="pszeniczne-banany" value="nie" onChange={this.handleOptionChange}/>
                </label>

                <p>4.Czy preferujesz tradycyjne smaki (nie lubisz eksperymentować )?</p>
                <label>tak<input type="radio" value="tak" onChange={this.handleOptionChange} name="lager-tradycja"/></label>
                <label>nie<input type="radio" value="nie" onChange={this.handleOptionChange} name="lager-tradycja"/>
                </label>

                <p>5.Czy lubisz owoce?</p>
                <label>tak<input type="radio" value="tak" onChange={this.handleOptionChangeClick} name="smakowe-owoce"/></label>
                <label>nie<input type="radio" value="nie" onChange={this.handleOptionChange} name="smakowe-owoce"/>
                </label>

                <p>6.Czy lubisz aromat ciemnego pieczywa?</p>
                <label>tak<input type="radio" value="tak" onChange={this.handleOptionChange} name="bock-pieczywo"/></label>
                <label>nie<input type="radio" value="nie" onChange={this.handleOptionChange} name="bock-pieczywo"/>
                </label>

                <p>7.Czy lubisz gorzką herbatę lub kawę?</p>
                <label>tak<input type="radio" value="tak" onChange={this.handleOptionChange} name="ipa-gorzki"/></label>
                <label>nie<input type="radio" value="nie" name="ipa-gorzki" onChange={this.handleOptionChange}/>
                </label>

                <p>8.Czy lubisz mocniejsze trunki?</p>
                <label>tak<input type="radio" value="tak" name="alkohol-porter" onChange={this.handleOptionChange}/></label>
                <label>nie<input type="radio" value="nie" name="alkohol-porter" onChange={this.handleOptionChange}/>
                </label>

                <p>9.Czy w napojach szukasz orzeźwienia?</p>
                <label>tak<input type="radio" value="tak" name="pszeniczne-orzezwienie" onChange={this.handleOptionChange}/></label>

                <label>nie<input type="radio" value="nie" name="pszeniczne-orzezwienie" onChange={this.handleOptionChange}/>
                </label>

                <p>10.Czy kwestią priorytetową podczas zakupów spożywczych jest ich niższa cena?
                </p>
                <label>tak<input type="radio" value="tak" name="lager-cena" onChange={this.handleOptionChange}/></label>
                <label>nie<input type="radio" value="nie" name="lager-cena" onChange={this.handleOptionChange}/>
                </label>

                <p>11.Czy lubisz piwo :)?</p>
                <label>tak<input type="radio" value="tak" name="smakowe-piwo" onChange={this.handleOptionChange}/></label>
                <label>nie<input type="radio" value="nie" name="smakowe-piwo" onChange={this.handleOptionChange}/>
                </label>

                <p>12.Czy lubisz kwas chlebowy?</p>
                <label>tak<input type="radio" value="tak" name="kwas-bock" onChange={this.handleOptionChange}/></label>
                <label>nie<input type="radio" value="nie" name="kwas-bock" onChange={this.handleOptionChange}/>
                </label>
                <br></br>
                <button className="btn btn-default" type="submit">Save</button>
                </form>
            </div>
        );
    }
}
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Beer/>, document.getElementById('app'));
});
