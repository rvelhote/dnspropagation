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
class DnsWebSocket {
  /**
   * Construct a DnsWebSocket object so we can encapsulate the WebSocket implementation.
   * @param address The URL that we want to connect to
   * @param onMessage The function to be called when we receive a reply from the server
   * @param onError The function to be called when we receive a fatal error from the server
   */
  constructor(address, onMessage, onError) {
    this.address = address;
    this.onWebSocketReply = onMessage;
    this.onWebSocketError = onError;
  }

  /**
   * Connects to the WebSocket address and requests all DNS information about a certain domain and
   * of a certain record type.
   *
   * @param domain The domain we want to check for DNS Record information
   * @param type The type of DNS record we want to check
   * @param countries The list of countries that the user wants to get DNS checks from.
   * @param challenge The anti-spam/anti-bot/anti-* challenge response that the user must solve
   * to be able to perform requests. If the user already authenticated (i.e. he has the right
   * cookie) before it can be sent as null or empty.
   */
  fetch(domain, type, countries, challenge) {
    const params = JSON.stringify({ domain, type, countries });
    const address = `${this.address}?c=${challenge === null ? '' : challenge}`;

    this.websocket = new WebSocket(address);
    this.websocket.onopen = () => this.websocket.send(params);
    this.websocket.onerror = this.onWebSocketError;
    this.websocket.onmessage = this.onWebSocketReply;
  }
}

export default DnsWebSocket;
