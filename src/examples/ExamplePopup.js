import React from 'react';
import i18n from '../i18n.js';
import { ReactTypeformEmbed } from '../components';

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 'en'
    }
    this.onLanguageChanged = this.onLanguageChanged.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  componentDidMount() {
    i18n.on('languageChanged', this.onLanguageChanged)
  }

  componentWillUnmount() {
    i18n.off('languageChanged', this.onLanguageChanged)
  }

  onLanguageChanged(lng) {
    this.setState({
      lng: lng
    })
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url={i18n.t('url')}
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button className="btn" onClick={this.openForm} style={{ cursor: 'pointer' }}>
        {i18n.t('rr')}
        </button>
      </div>
    );
  }
}

export default ExamplePopup;
