export default class TestClass {
  constructor(props) {
    this._name = props.name;
    this._age = props.age;
  }

  appendH2 = () => {
    const ele = document.getElementById('js-inject');
    ele.innerHTML = `<h2>Hey I'm ${this._name} and i'm ${this._age} years old</h2>`;
    ele.style.color = 'red';
  };
}
