import React from 'react';

import ExampleWidget from './ExampleWidget';
import ExamplePopup from './ExamplePopup';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="Examples">
        <div className="container" >
          {/* <h1>DEKARBO</h1>
          <p>
            {`Dein Unternehmen in die Klimaneutralität zu führen, war noch nie so einfach! `}
            
          </p>
          <p>
            Visit <a href="https://www.dekarbo.de/">DEKARBO</a> Landing Page
            for more info.
          </p>
          <br />
          <br />
          <h2>Erhalte personalisierte Empfehlungen, wie Du CO2-Emissionen in Deinem Unternehmen verringern kannst</h2>
          <br /> */}
          {/* <div className="Examples__widget-section">
            <ExampleWidget />
          </div>
          <br /> */}
          {/* <hr />
          <br />
          <h2>Please Fill this typeform</h2>
          <br /> */}
          {/* <h2>Please Fill this typeform</h2> */}
          <div className="Examples__popup-section">
            <p>{this.props.lang}</p>
            <ExamplePopup lang={this.props.lang}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Examples;
