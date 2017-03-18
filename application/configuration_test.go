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

func TestLoadConfigurationSuccess(t *testing.T) {
	configuration, err := LoadConfiguration("../conf/configuration.json")

	if err != nil {
		t.Errorf("Loading the configuration file caused the error: %s", err.Error())
	}

	if len(configuration.Countries) != 15 {
		t.Errorf("The configuration file should have %d servers but it only has %d", 15, len(configuration.Servers))
	}
}

func TestLoadConfigurationFailureNoFile(t *testing.T) {
	configuration, err := LoadConfiguration("conf/servers-does-not-exist.json")

	if err == nil {
		t.Error("Loading the configuration of a non-existing directory should have caused an error")
	}

	if len(configuration.Servers) != 0 {
		t.Error("There should be no servers while loading a configuration from a non-existing directory")
	}

	t.Log(err)
}

func TestLoadConfigurationFailureBadJSON(t *testing.T) {
	configuration, err := LoadConfiguration("../conf/bad-configuration.json")

	if err == nil {
		t.Error("Loading the configuration of an invalid JSON file should have caused an error")
	}

	if len(configuration.Servers) != 0 {
		t.Error("There should be no servers while loading a configuration from an invalid JSON file")
	}

	t.Log(err)
}
