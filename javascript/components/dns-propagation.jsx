/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DnsServerCollection from './dns-server-collection';
import DnsRecordInformation from './dns-record-information';
import DnsWebSocket from '../websocket/websocket';
import DnsMessage from './dns-message';
import DnsRecaptcha from './dns-recaptcha';
import DnsProgress from './dns-progress';
import DnsForm from './dns-form';
import DnsCountries from './dns-countries';

const websocketURL = `ws://${document.location.hostname}:${document.location.port}/api/v1/query`;

/**
 *
 */
class DnsPropagation extends React.Component {
  constructor(props) {
    super(props);

    this.onDnsQuerySubmit = this.onDnsQuerySubmit.bind(this);
    this.handleDomainChange = this.handleDomainChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCountrySelection = this.handleCountrySelection.bind(this);

    this.state = {
      domain: 'golang.org',
      type: 'a',
      servers: [],
      working: false,
      percentage: 0,
      message: {
        message: '',
        type: 'info'
      },
      recatpcha: {
        challenge: '',
        display: props.recaptcha
      },
      countries: {
        AD: false,
        AR: false,
        AU: false,
        BR: false,
        CA: false,
        DE: false,
        DK: false,
        ES: false,
        GB: false,
        HR: false,
        JP: false,
        KZ: true,
        MA: false,
        MX: false,
        NG: false,
        NZ: false,
        PK: false,
        PL: true,
        PT: true,
        QA: false,
        RU: false,
        SE: false,
        US: false
      }
    };

    this.websocket = new DnsWebSocket(
      websocketURL,
      this.onWebSocketReply.bind(this),
      this.onWebSocketError.bind(this)
    );
  }

  componentDidMount() {
    window.addEventListener('keyup', (event) => {
      const input = document.getElementById('domain');
      const focused = document.activeElement;

      if (focused.type !== 'text' && focused.type !== 'select') {
        if (event.key.toLowerCase() === 'q') {
          this.onDnsQuerySubmit(event);
        } else if (event.key.toLowerCase() === 'a') {
          input.focus();
          input.selectionStart = input.selectionEnd = input.value.length;
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup');
  }

  onDnsQuerySubmit(event) {
    event.preventDefault();

    this.setState({
      working: true,
      percentage: 0,
      servers: [],
      message: {
        message: '',
        type: 'info'
      }
    });

    const countries = Object.keys(this.state.countries).filter(k => this.state.countries[k]);
    this.websocket.fetch(
      this.state.domain,
      this.state.type,
      countries,
      this.state.recatpcha.display ? window.grecaptcha.getResponse() : null
    );
  }

  onWebSocketError() {
    this.setState({
      working: false,
      message: {
        message: 'Connection error. Please try again!',
        type: 'danger'
      }
    });
  }

  onWebSocketReply(event) {
    const dataset = JSON.parse(event.data);

    if (dataset.Error) {
      this.setState({ working: false, message: { message: dataset.Error, type: 'danger' } });
      return;
    }

    const selectedCountries = Object.keys(this.state.countries).filter(k => this.state.countries[k]);
    const percentage = ((this.state.servers.length + 1) / selectedCountries.length) * 100;
    const state = {
      servers: this.state.servers.concat(JSON.parse(event.data)),
      percentage,
      working: percentage !== 100,
      recatpcha: {
        challenge: '',
        display: false
      }
    };

    this.setState(state);
  }

  handleCountrySelection(event) {
    const updated = Object.assign({}, this.state.countries, { [event.target.value]: !this.state.countries[event.target.value] });
    this.setState({ countries: updated });
  }

  handleDomainChange(event) {
    this.setState({ domain: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  render() {
    let recaptcha = null;
    if (this.state.recatpcha.display) {
      recaptcha = (
        <div className="col-lg-12">
          <DnsRecaptcha publickey={this.props.publickey} />
        </div>
      );
    }

    return (
      <div>
        <header className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h1>
                    <img alt="DNS Propagation Logo" src="//i.imgur.com/rN1zILE.png" />
                    <FormattedMessage id="app-name" defaultMessage={'dnspropagation'} />
                  </h1>
                  <small>
                    <FormattedMessage id="app-tagline" defaultMessage={'Check a domain\'s DNS records. Check the propagation of your record changes and debug DNS related issues on the Internet.'} />
                  </small>
                </div>
                <DnsForm submit={this.onDnsQuerySubmit} working={this.state.working} type={this.state.type} domain={this.state.domain} changeType={this.handleTypeChange} changeDomain={this.handleDomainChange} />
              </div>
            </div>
          </div>
          <DnsProgress max={100} percentage={this.state.percentage} />
        </header>

        <div className="container results">
          <div className="row">
            <div className="col-lg-12">
              <DnsRecordInformation record={this.state.type} />
            </div>

            { recaptcha }

            <div className="col-lg-12">
              <DnsCountries onChange={this.handleCountrySelection} countries={this.state.countries} />
            </div>

            <div className="col-lg-12">
              { this.state.message.message.length > 0 ?
                <DnsMessage message={this.state.message.message} type={this.state.message.type} /> :
                <DnsServerCollection servers={this.state.servers} /> }
            </div>
          </div>
        </div>
        <footer className="container main">
          <small>
            <FormattedMessage id="app-footer" defaultMessage={'Press {q} to refresh the URL in text box and {a} focus on the textbox. Source Code is available in {link}'} values={{ q: <code>Q</code>, a: <code>A</code>, link: <a target="_blank" rel="noopener noreferrer" href="https://github.com/rvelhote/dnspropagation">GitHub</a> }} />
          </small>
        </footer>
      </div>
    );
  }
}

DnsPropagation.displayName = 'DnsPropagation';

DnsPropagation.propTypes = {
  publickey: PropTypes.string,
  recaptcha: PropTypes.bool
};

DnsPropagation.defaultProps = {
  publickey: '',
  recaptcha: true
};

export default DnsPropagation;
