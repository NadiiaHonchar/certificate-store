import { useState } from "react";
import "./App.css";
// const ASN1 = require('@lapo/asn1js');
import PEM from "asn1-parser";
// const Hex = require('@lapo/asn1js/hex');
// import jseu from 'js-encoding-utils';
// import DropArea from './components/DropeArea';
// import Header from './components/Header';
// import * as certInfo from 'cert-infos';


function App() {
  const [drag, setDrag] = useState(false);

  function dragStartHandler(e){
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e){
    e.preventDefault();
    setDrag(false);
  }

  function onDropeHandler(e){
    e.preventDefault();
    let files = [...e.dataTransfer.files];
//     const result = ASN1.decode(files);
// if (result.typeName() !== 'SEQUENCE') {
//     throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
// }
// const tbsCertificate = result.sub[0];

// const {certificate} = certInfo.getRSACertInfoPem(files);
// console.log('The short certificate information:');
// console.log(certificate);

// const decoded = jseu.encoder.decodeBase64(files);
// const decoded = jseu.encoder.decodeBase64(files);
// const binCert = jseu.encoder.hexStringToArrayBuffer(files);
var der = PEM.parseBlock(files).der;
// var json = ASN1.parse(files);


// const result = ASN1.decode(files);


// require([
//   'https://unpkg.com/@lapo/asn1js/asn1.js',
//   'https://unpkg.com/@lapo/asn1js/hex.js'
// ], function(ASN1, Hex) {
//   document.body.innerText = ASN1.decode(Hex.decode('06032B6570')).content();
// });

    console.log(der)
    setDrag(false)
  }

  return (
    <div className="app">
      {drag ? (
        <div className="drop-area" 
        onDragStart={e=>dragStartHandler(e)} 
        onDragLeave={e=>dragLeaveHandler(e)} 
        onDragOver={e=>dragStartHandler(e)}
        onDrop={e=>onDropeHandler(e)}> Відпустіть файл для завантажування</div>
      ) : (
        <div onDragStart={e=>dragStartHandler(e)} 
        onDragLeave={e=>dragLeaveHandler(e)} 
        onDragOver={e=>dragStartHandler(e)}> Перетягніть файл сертифіката у поле</div>
      )}
    </div>
  );
}

export default App;
