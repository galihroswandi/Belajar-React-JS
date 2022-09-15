import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);

    const fruit1 = 'mangga';
    const fruit2 = 'apple';
    const fruit3 = 'anggur';
  }
  
  render() {
    
    // Hygher order function react js

    // {map} => memetakan array menjadi array baru "array.map( callbackFunction )"
    const fruits = ['mangga', 'apple', 'anggur', 'jeruk', 'nanas', 'strawberry'];
    const fruit = fruits.map( (f, index) => <li key={index}>{f}</li> );
        // {push} => Menambahkan nilai array baru "array.push"

    // {filter} => memfilter array menjadikannya array baru "array.filter( callbackFunction )"
    const numbers = [1, 6, 7, 8, 9, 0, 2];
    const numb = numbers.filter( (n) => n < 7)
    const number = numb.map( (n) => <li key={n.toString()}>{n}</li>);

    // {Reduce} => menggabungkan semua nilai lalu bisa menambahkan kondisi tertentu "array.reduce( (value, accumulator) => expresion )"
    const name = ['G', 'a', 'l', 'i', 'h', 'R', 'o', 's', 'w', 'a', 'n', 'd', 'i'];
    const fullName = name.reduce((value, acc) => value + acc);
    const totalNilai = numb.reduce( (value, acc) => value + acc );

    return (
    <div>
      <ul>
        {number}
      </ul>
      <h1>Total Nilai Dari Array : {totalNilai}</h1>
    </div>
    )
  }
}
export default App;
