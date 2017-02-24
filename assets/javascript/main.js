webpackJsonp([1,2],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoaRecord = function SoaRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'An SOA record is a Start of Authority. Every domain must have a Start of Authority record at the cutover point where the domain is delegated from its parent domain.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/soa-record'
    )
  );
}; /*
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


SoaRecord.displayName = 'SoaRecord';

exports.default = SoaRecord;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SrvRecord = function SrvRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'SRV records are often used to help with service discovery. For example, SRV records are used in Internet Telephony for defining where a SIP service may be found. An SRV record typically defines a symbolic name and the transport protocol used as part of the domain name, and defines the priority, weight, port and target for the service in the record content.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/srv-record'
    )
  );
}; /*
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


SrvRecord.displayName = 'ARecord';

exports.default = SrvRecord;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TxRecord = function TxRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'A TXT record (short for text record) is a type of resource record in the Domain Name System (DNS) used to provide the ability to associate some arbitrary and unformatted text with a host or other name, such as human readable information about a server, network, data center, and other accounting information.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://en.wikipedia.org/wiki/TXT_record'
    )
  );
}; /*
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


TxRecord.displayName = 'TxRecord';

exports.default = TxRecord;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ARecord = function ARecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__a-record" },
      props.record.A
    )
  );
}; /*
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


ARecord.displayName = 'ARecord';

ARecord.propTypes = {
  record: _react2.default.PropTypes.object
};

ARecord.defaultProps = {
  record: {
    A: ''
  }
};

exports.default = ARecord;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AAAARecord = function AAAARecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__aaaa-record" },
      props.record.AAAA
    )
  );
}; /*
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


AAAARecord.displayName = 'AAAARecord';

AAAARecord.propTypes = {
  record: _react2.default.PropTypes.object
};

exports.default = AAAARecord;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaaRecord = function CaaRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__caa-record" },
      props.record.Value
    )
  );
}; /*
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


CaaRecord.displayName = 'CaaRecord';

CaaRecord.propTypes = {
  record: _react2.default.PropTypes.shape
};

CaaRecord.defaultProps = {
  record: {
    Value: ''
  }
};

exports.default = CaaRecord;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CnameRecord = function CnameRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__cname-record" },
      props.record.Target
    )
  );
}; /*
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


CnameRecord.displayName = 'CnameRecord';

CnameRecord.propTypes = {};

exports.default = CnameRecord;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MxRecord = function MxRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__mx-record" },
      props.record.Mx
    ),
    _react2.default.createElement(
      "div",
      { className: "dns-record__preference" },
      props.record.Preference
    )
  );
}; /*
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


MxRecord.displayName = 'MxRecord';

MxRecord.propTypes = {
  record: _react2.default.PropTypes.object
};

MxRecord.defaultProps = {
  record: {
    Mx: ''
  }
};

exports.default = MxRecord;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NsRecord = function NsRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__ns-record" },
      props.record.Ns
    )
  );
}; /*
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


NsRecord.displayName = 'NsRecord';

NsRecord.propTypes = {};

exports.default = NsRecord;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PtrRecord = function PtrRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__ptr-record" },
      props.record.Ptr
    )
  );
}; /*
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


PtrRecord.displayName = 'PtrRecord';

PtrRecord.propTypes = {};

exports.default = PtrRecord;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoaRecord = function SoaRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__soa-record" },
      props.record.Ns
    ),
    _react2.default.createElement(
      "div",
      { className: "dns-record__mbox-record" },
      props.record.Mbox
    )
  );
}; /*
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


SoaRecord.displayName = 'SoaRecord';

SoaRecord.propTypes = {};

exports.default = SoaRecord;

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SrvRecord = function SrvRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    _react2.default.createElement(
      "div",
      { className: "dns-record__soa-record" },
      props.record.Soa
    )
  );
}; /*
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


SrvRecord.displayName = 'SrvRecord';

SrvRecord.propTypes = {};

exports.default = SrvRecord;

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TxtRecord = function TxtRecord(props) {
  return _react2.default.createElement(
    "div",
    { className: "dns-record" },
    props.record.Txt.map(function (r) {
      return _react2.default.createElement(
        "div",
        { className: "dns-record__txt-record" },
        r
      );
    })
  );
}; /*
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


TxtRecord.displayName = 'TxtRecord';

TxtRecord.propTypes = {};

exports.default = TxtRecord;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var DnsWebSocket = function () {
  function DnsWebSocket(address) {
    _classCallCheck(this, DnsWebSocket);

    this.address = address;
    this.onWebSocketReply = null;
    this.onWebSocketError = null;
  }

  _createClass(DnsWebSocket, [{
    key: "fetch",
    value: function fetch(domain, type, challenge) {
      var _this = this;

      var params = JSON.stringify({ domain: domain, type: type });

      this.websocket = new WebSocket(this.address + "?c=" + (challenge == null ? "" : challenge));
      this.websocket.onopen = function () {
        return _this.websocket.send(params);
      };
      this.websocket.onerror = this.onWebSocketError;
      this.websocket.onmessage = this.onWebSocketReply;
    }
  }]);

  return DnsWebSocket;
}();

exports.default = DnsWebSocket;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactIntl = __webpack_require__(26);

var _dnsPropagation = __webpack_require__(84);

var _dnsPropagation2 = _interopRequireDefault(_dnsPropagation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var App = function App() {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    { locale: 'en' },
    _react2.default.createElement(_dnsPropagation2.default, { publickey: window.config.publickey, recaptcha: window.config.recaptcha })
  );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

exports.default = App;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(26);

var _dnsServerCollection = __webpack_require__(91);

var _dnsServerCollection2 = _interopRequireDefault(_dnsServerCollection);

var _dnsRecordInformation = __webpack_require__(89);

var _dnsRecordInformation2 = _interopRequireDefault(_dnsRecordInformation);

var _websocket = __webpack_require__(113);

var _websocket2 = _interopRequireDefault(_websocket);

var _dnsMessage = __webpack_require__(85);

var _dnsMessage2 = _interopRequireDefault(_dnsMessage);

var _dnsRecaptcha = __webpack_require__(87);

var _dnsRecaptcha2 = _interopRequireDefault(_dnsRecaptcha);

var _dnsProgress = __webpack_require__(86);

var _dnsProgress2 = _interopRequireDefault(_dnsProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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


/**
 *
 */
var DnsPropagation = function (_React$Component) {
  _inherits(DnsPropagation, _React$Component);

  function DnsPropagation(props) {
    _classCallCheck(this, DnsPropagation);

    var _this = _possibleConstructorReturn(this, (DnsPropagation.__proto__ || Object.getPrototypeOf(DnsPropagation)).call(this, props));

    _this.onDnsQuerySubmit = _this.onDnsQuerySubmit.bind(_this);
    _this.handleDomainChange = _this.handleDomainChange.bind(_this);
    _this.handleTypeChange = _this.handleTypeChange.bind(_this);

    _this.state = {
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
      }
    };

    _this.websocket = new _websocket2.default('ws://127.0.0.1:8080/api/v1/query');
    _this.websocket.onWebSocketReply = _this.onWebSocketReply.bind(_this);
    _this.websocket.onWebSocketError = _this.onWebSocketError.bind(_this);
    return _this;
  }

  _createClass(DnsPropagation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('keyup', function (event) {
        var input = document.getElementById('domain');
        var focused = document.activeElement;

        if (focused.type !== 'text' && focused.type !== 'select') {
          if (event.key.toLowerCase() === 'q') {
            _this2.onDnsQuerySubmit(event);
          } else if (event.key.toLowerCase() === 'a') {
            input.focus();
            input.selectionStart = input.selectionEnd = input.value.length;
          }
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keyup');
    }
  }, {
    key: 'onDnsQuerySubmit',
    value: function onDnsQuerySubmit(event) {
      event.preventDefault();
      this.setState({ working: true, percentage: 0, servers: [], message: { message: '', type: 'info' } });
      this.websocket.fetch(this.state.domain, this.state.type, this.state.recatpcha.display ? window.grecaptcha.getResponse() : null);
    }
  }, {
    key: 'onWebSocketError',
    value: function onWebSocketError() {
      this.setState({ working: false, message: { message: 'Connection error. Please try again!', type: 'danger' } });
    }
  }, {
    key: 'onWebSocketReply',
    value: function onWebSocketReply(event) {
      var dataset = JSON.parse(event.data);

      if (dataset.Error) {
        this.setState({ working: false, message: { message: dataset.Error, type: 'danger' } });
        return;
      }

      var percentage = (this.state.servers.length + 1) / 15 * 100;
      var state = {
        servers: this.state.servers.concat(JSON.parse(event.data)),
        percentage: percentage,
        working: percentage !== 100,
        recatpcha: {
          challenge: '',
          display: false
        }
      };

      this.setState(state);
    }
  }, {
    key: 'handleDomainChange',
    value: function handleDomainChange(event) {
      this.setState({ domain: event.target.value });
    }
  }, {
    key: 'handleTypeChange',
    value: function handleTypeChange(event) {
      this.setState({ type: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var recaptcha = null;
      if (this.state.recatpcha.display) {
        recaptcha = _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(_dnsRecaptcha2.default, { publickey: this.props.publickey })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          { className: 'navbar navbar-default navbar-fixed-top' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-lg-12' },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'h1',
                    null,
                    _react2.default.createElement('img', { alt: 'DNS Propagation Logo', src: '//i.imgur.com/rN1zILE.png' }),
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app-name', defaultMessage: 'dnspropagation' })
                  ),
                  _react2.default.createElement(
                    'small',
                    null,
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app-tagline', defaultMessage: 'Check a domain\'s DNS records. Check the propagation of your record changes and debug DNS related issues on the Internet.' })
                  )
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.onDnsQuerySubmit, method: 'post', action: '/api/v1/query' },
                  _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-lg-4' },
                      _react2.default.createElement('input', { id: 'domain', placeholder: 'What is the domain you want to check?', className: 'form-control', type: 'text', value: this.state.domain, onChange: this.handleDomainChange, required: true })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-lg-2' },
                      _react2.default.createElement(
                        'select',
                        { className: 'form-control', value: this.state.type, onChange: this.handleTypeChange, required: true },
                        _react2.default.createElement(
                          'option',
                          { value: 'a' },
                          'A'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'aaaa' },
                          'AAAA'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'caa' },
                          'CAA'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'cname' },
                          'CNAME'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'mx' },
                          'MX'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'ns' },
                          'NS'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'ptr' },
                          'PTR'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'soa' },
                          'SOA'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'srv' },
                          'SRV'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: 'txt' },
                          'TXT'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-lg-2' },
                      _react2.default.createElement(
                        'button',
                        { className: 'btn btn-primary', type: 'submit', disabled: this.state.working },
                        _react2.default.createElement(
                          'span',
                          { className: 'glyphicon glyphicon-search' },
                          '\xA0'
                        ),
                        _react2.default.createElement(
                          'span',
                          null,
                          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app-name', defaultMessage: 'Query {type} record for {domain}', values: { type: this.state.type, domain: this.state.domain } })
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(_dnsProgress2.default, { max: 100, percentage: this.state.percentage })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              _react2.default.createElement(_dnsRecordInformation2.default, { record: this.state.type })
            ),
            recaptcha,
            _react2.default.createElement(
              'div',
              { className: 'col-lg-12' },
              this.state.message.message.length > 0 ? _react2.default.createElement(_dnsMessage2.default, { message: this.state.message.message, type: this.state.message.type }) : _react2.default.createElement(_dnsServerCollection2.default, { servers: this.state.servers })
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'container main' },
          _react2.default.createElement(
            'small',
            null,
            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'app-footer', defaultMessage: 'Press {q} to refresh the URL in text box and {a} focus on the textbox. Source Code is available in {link}', values: { q: _react2.default.createElement(
                  'code',
                  null,
                  'Q'
                ), a: _react2.default.createElement(
                  'code',
                  null,
                  'A'
                ), link: _react2.default.createElement(
                  'a',
                  { target: '_blank', rel: 'noopener noreferrer', href: 'https://github.com/rvelhote/dnspropagation' },
                  'GitHub'
                ) } })
          )
        )
      );
    }
  }]);

  return DnsPropagation;
}(_react2.default.Component);

DnsPropagation.displayName = 'DnsPropagation';

DnsPropagation.propTypes = {
  publickey: _react2.default.PropTypes.string,
  recaptcha: _react2.default.PropTypes.bool
};

DnsPropagation.defaultProps = {
  publickey: '',
  recaptcha: true
};

exports.default = DnsPropagation;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnsMessage = function DnsMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + props.type },
    props.message
  );
}; /*
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


DnsMessage.displayName = 'DnsMessage';

DnsMessage.propTypes = {
  message: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string
};

DnsMessage.defaultProps = {
  message: '',
  type: 'info'
};

exports.default = DnsMessage;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnsProgress = function DnsProgress(props) {
  return _react2.default.createElement('progress', { max: props.max, value: props.percentage });
}; /*
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


DnsProgress.displayName = 'DnsProgress';

DnsProgress.propTypes = {
  percentage: _react2.default.PropTypes.number,
  max: _react2.default.PropTypes.number
};

DnsProgress.defaultProps = {
  percentage: 0,
  max: 100
};

exports.default = DnsProgress;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnsRecaptcha = function DnsRecaptcha(props) {
  return _react2.default.createElement('div', { className: 'g-recaptcha', 'data-sitekey': props.publickey });
}; /*
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


DnsRecaptcha.displayName = 'DnsRecaptcha';

DnsRecaptcha.propTypes = {
  publickey: _react2.default.PropTypes.string,
  recaptchaCallback: _react2.default.PropTypes.func
};

DnsRecaptcha.defaultProps = {
  publickey: '',
  recaptchaCallback: null
};

exports.default = DnsRecaptcha;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _dnsRecord = __webpack_require__(90);

var _dnsRecord2 = _interopRequireDefault(_dnsRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var DnsRecordCollection = function DnsRecordCollection(props) {
  var hasRecords = props.records.Data !== null && props.records.Data.length > 0;

  if (hasRecords) {
    return _react2.default.createElement(
      'ul',
      { className: 'dns-record-collection' },
      ' ',
      props.records.Data.map(function (record, index) {
        return _react2.default.createElement(
          'li',
          { className: 'dns-record-collection__dns-record', key: index },
          _react2.default.createElement(_dnsRecord2.default, { type: props.records.Type, record: record })
        );
      })
    );
  }

  return _react2.default.createElement(
    'div',
    null,
    props.message
  );
};

DnsRecordCollection.displayName = 'DnsRecordCollection';

DnsRecordCollection.propTypes = {
  //  recordType: React.PropTypes.string,
  //  records: React.PropTypes.arrayOf(React.PropTypes.object),
  //  message: React.PropTypes.string
};

DnsRecordCollection.defaultProps = {
  //  recordType: 'A',
  //  records: [],
  //  message: ''
};

exports.default = DnsRecordCollection;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _aRecord = __webpack_require__(93);

var _aRecord2 = _interopRequireDefault(_aRecord);

var _aaaaRecord = __webpack_require__(94);

var _aaaaRecord2 = _interopRequireDefault(_aaaaRecord);

var _caaRecord = __webpack_require__(95);

var _caaRecord2 = _interopRequireDefault(_caaRecord);

var _cnameRecord = __webpack_require__(96);

var _cnameRecord2 = _interopRequireDefault(_cnameRecord);

var _mxRecord = __webpack_require__(97);

var _mxRecord2 = _interopRequireDefault(_mxRecord);

var _nsRecord = __webpack_require__(98);

var _nsRecord2 = _interopRequireDefault(_nsRecord);

var _ptrRecord = __webpack_require__(99);

var _ptrRecord2 = _interopRequireDefault(_ptrRecord);

var _soaRecord = __webpack_require__(100);

var _soaRecord2 = _interopRequireDefault(_soaRecord);

var _srvRecord = __webpack_require__(101);

var _srvRecord2 = _interopRequireDefault(_srvRecord);

var _txtRecord = __webpack_require__(102);

var _txtRecord2 = _interopRequireDefault(_txtRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecordTypes = {
  a: _aRecord2.default,
  aaaa: _aaaaRecord2.default,
  caa: _caaRecord2.default,
  cname: _cnameRecord2.default,
  mx: _mxRecord2.default,
  ns: _nsRecord2.default,
  ptr: _ptrRecord2.default,
  soa: _soaRecord2.default,
  srv: _srvRecord2.default,
  txt: _txtRecord2.default
}; /*
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


var DnsRecordInformation = function DnsRecordInformation(props) {
  var RecordType = RecordTypes[props.record];
  return _react2.default.createElement(
    'div',
    { className: 'block__dns-record-information' },
    _react2.default.createElement(RecordType, { record: props.record })
  );
};

DnsRecordInformation.displayName = 'DnsRecordInformation';

DnsRecordInformation.propTypes = {
  record: _react2.default.PropTypes.string
};

DnsRecordInformation.defaultProps = {
  record: 'A'
};

exports.default = DnsRecordInformation;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _aRecord = __webpack_require__(103);

var _aRecord2 = _interopRequireDefault(_aRecord);

var _aaaaRecord = __webpack_require__(104);

var _aaaaRecord2 = _interopRequireDefault(_aaaaRecord);

var _caaRecord = __webpack_require__(105);

var _caaRecord2 = _interopRequireDefault(_caaRecord);

var _cnameRecord = __webpack_require__(106);

var _cnameRecord2 = _interopRequireDefault(_cnameRecord);

var _mxRecord = __webpack_require__(107);

var _mxRecord2 = _interopRequireDefault(_mxRecord);

var _nsRecord = __webpack_require__(108);

var _nsRecord2 = _interopRequireDefault(_nsRecord);

var _ptrRecord = __webpack_require__(109);

var _ptrRecord2 = _interopRequireDefault(_ptrRecord);

var _soaRecord = __webpack_require__(110);

var _soaRecord2 = _interopRequireDefault(_soaRecord);

var _srvRecord = __webpack_require__(111);

var _srvRecord2 = _interopRequireDefault(_srvRecord);

var _txtRecord = __webpack_require__(112);

var _txtRecord2 = _interopRequireDefault(_txtRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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


var RecordTypes = {
  a: _aRecord2.default,
  aaaa: _aaaaRecord2.default,
  caa: _caaRecord2.default,
  cname: _cnameRecord2.default,
  mx: _mxRecord2.default,
  ns: _nsRecord2.default,
  ptr: _ptrRecord2.default,
  soa: _soaRecord2.default,
  srv: _srvRecord2.default,
  txt: _txtRecord2.default
};

var DnsRecord = function (_React$Component) {
  _inherits(DnsRecord, _React$Component);

  function DnsRecord() {
    _classCallCheck(this, DnsRecord);

    return _possibleConstructorReturn(this, (DnsRecord.__proto__ || Object.getPrototypeOf(DnsRecord)).apply(this, arguments));
  }

  _createClass(DnsRecord, [{
    key: 'render',
    value: function render() {
      var RecordType = RecordTypes[this.props.type];
      return _react2.default.createElement(RecordType, { record: this.props.record });
    }
  }]);

  return DnsRecord;
}(_react2.default.Component);

DnsRecord.displayName = 'DnsRecord';

DnsRecord.propTypes = {
  //  recordType: React.PropTypes.string,
  //  record: React.PropTypes.object
};

DnsRecord.defaultProps = {
  //  recordType: '',
  //  record: {}
};

exports.default = DnsRecord;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _dnsServer = __webpack_require__(92);

var _dnsServer2 = _interopRequireDefault(_dnsServer);

var _dnsRecordCollection = __webpack_require__(88);

var _dnsRecordCollection2 = _interopRequireDefault(_dnsRecordCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FIXME Perhaps this component should be further subdivided?
 * FIXME The record type should be in a structure with the list of records (avoid passing it down)
 * FIXME The Duration should be a value set inside the server?
 */
var DnsServerCollection = function DnsServerCollection(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'row' },
    ' ',
    props.servers.map(function (server) {
      return _react2.default.createElement(
        'li',
        { className: server.Records.Type === 'txt' ? 'col-lg-12' : 'col-lg-4', key: server.Server.ipaddress },
        _react2.default.createElement(
          'div',
          { className: 'panel ' + (server.Records.Data !== null && server.Records.Data.length > 0 ? 'panel-default' : 'panel-danger') },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(_dnsServer2.default, { server: server.Server, duration: server.Duration })
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_dnsRecordCollection2.default, { records: server.Records, message: server.Message })
          )
        )
      );
    })
  );
}; /*
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


DnsServerCollection.displayName = 'DnsServerCollection';

DnsServerCollection.propTypes = {
  servers: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object)
};

DnsServerCollection.defaultProps = {
  servers: []
};

exports.default = DnsServerCollection;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnsServer = function DnsServer(props) {
  return _react2.default.createElement(
    "div",
    { className: "server" },
    _react2.default.createElement(
      "div",
      { className: "server__flag" },
      _react2.default.createElement(
        "span",
        { className: "flag-icon flag-icon-" + props.server.code },
        "\xA0"
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "server__country" },
      props.server.country,
      " ",
      _react2.default.createElement(
        "small",
        null,
        "(",
        props.duration,
        ")"
      )
    )
  );
}; /*
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


DnsServer.displayName = 'DnsServer';

DnsServer.propTypes = {
  server: _react2.default.PropTypes.object
};

DnsServer.defaultProps = {
  server: {}
};

exports.default = DnsServer;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ARecord = function ARecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'An A record maps a domain name to the IP address (IPv4) of the computer hosting the domain. Simply put, an A record is used to find the IPv4 address of a computer connected to the internet from a name. The A in A record stands for Address.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/a-record'
    )
  );
}; /*
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


ARecord.displayName = 'ARecord';

exports.default = ARecord;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AaaaRecord = function AaaaRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'An AAAA record maps a domain name to the IP address (IPv6) of the computer hosting the domain. Simply put, an AAAA record is used to find the IPv6 address of a computer connected to the internet from a name.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/a-record'
    )
  );
}; /*
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


AaaaRecord.displayName = 'AaaaRecord';

exports.default = AaaaRecord;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaaRecord = function CaaRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'A Certification Authority Authorization (CAA) record is used to specify which certificate authorities (CAs) are allowed to issue certificates for a domain.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/caa-record'
    )
  );
}; /*
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


CaaRecord.displayName = 'CaaRecord';

exports.default = CaaRecord;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CnameRecord = function CnameRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'CNAME stands for Canonical Name. CNAME records can be used to alias one name to another.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/cname-record'
    )
  );
}; /*
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


CnameRecord.displayName = 'CnameRecord';

exports.default = CnameRecord;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MxRecord = function MxRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'MX stands for Mail eXchange. MX Records tell email delivery agents where they should deliver your email. You can have many MX records for a domain, providing a way to have redundancy and ensure that email will always be delivered. MX records make it easy to define what servers should handle email delivery and allows you to provide multiple servers for maximum redundancy and ensured delivery.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/mx-record'
    )
  );
}; /*
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


MxRecord.displayName = 'MxRecord';

exports.default = MxRecord;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NsRecord = function NsRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'An NS record is used to delegate a subdomain to a set of name servers. Whenever you delegate a domain to DNSimple the TLD authorities place NS records for your domain in the TLD name servers pointing to us'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://support.dnsimple.com/articles/ns-record'
    )
  );
}; /*
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


NsRecord.displayName = 'NsRecord';

exports.default = NsRecord;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PtrRecord = function PtrRecord() {
  return _react2.default.createElement(
    'blockquote',
    null,
    _react2.default.createElement(
      'p',
      null,
      'You can think of the PTR record as an opposite of the A record. While the A record points a domain name to an IP address, the PTR record resolves the IP address to a domain/hostname. PTR records are used for the reverse DNS (Domain Name System) lookup. Using the IP address you can get the associated domain/hostname. An A record should exist for every PTR record.'
    ),
    _react2.default.createElement(
      'footer',
      null,
      'https://www.siteground.com/kb/what_is_a_ptr_record_and_how_to_add_one'
    )
  );
}; /*
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


PtrRecord.displayName = 'PtrRecord';

exports.default = PtrRecord;

/***/ })

},[230]);
//# sourceMappingURL=main.js.map