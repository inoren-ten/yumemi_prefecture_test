import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export const resas = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp/api/v1/',
  headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'TYYuFGHmMr2iPVizp07zoTJ9Qo0nHiR60ZB0DnA4',
  },
  responseType: 'json'
});

export default App;
