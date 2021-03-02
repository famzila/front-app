import React from 'react';
import { Container } from 'reactstrap';

const url = 'https://type.fit/api/quotes';

function generateMantra() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      const row = Math.floor(Math.random() * 101 + 1);
      if (
        document.getElementById('quote') &&
        document.getElementById('author')
      ) {
        document.getElementById('quote').innerHTML = data[row]['text'];
        document.getElementById('author').innerHTML = ' ' + data[row]['author'];
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

setInterval(generateMantra(), 100);

class Mantra extends React.Component {
  render() {
    return (
      <section className="section py-5 bg-secondary">
        <Container>
          <blockquote className="text-center blockquote">
            <p id="quote" className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <cite id="author" title="Source Title">
                Anounymous
              </cite>
            </footer>
          </blockquote>
        </Container>
      </section>
    );
  }
}

export default Mantra;
