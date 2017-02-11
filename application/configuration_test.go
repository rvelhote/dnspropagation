// Package application contains the server-side application code.
package application

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
import (
	"testing"
)

func TestConfiguration_LoadConfiguration_Success(t *testing.T) {
	servers, err := LoadConfiguration("../conf/servers.json")

	if err != nil {
		t.Errorf("Loading the configuration file caused the error: %s", err.Error())
	}

	if len(servers) != 15 {
		t.Errorf("The configuration file should have %d servers but it only has %d", 15, len(servers))
	}
}

func TestConfiguration_LoadConfiguration_Failure(t *testing.T) {
	servers, err := LoadConfiguration("conf/servers-does-not-exist.json")

	if err == nil {
		t.Error("Loading the configuration of a non-existing directory should have caused an error")
	}

	if len(servers) != 0 {
		t.Error("There should be no servers while loading a configuration from a non-existing directory")
	}
}

func TestConfiguration_LoadConfiguration_BadJSON(t *testing.T) {
	servers, err := LoadConfiguration("../conf/bad-servers.json")

	if err == nil {
		t.Error("Loading the configuration of an invalid JSON file should have caused an error")
	}

	if len(servers) != 0 {
		t.Error("There should be no servers while loading a configuration from an invalid JSON file")
	}
}
