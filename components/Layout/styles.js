const global = () => 
  (<style>{
    `
    * {
      box-sizing: border-box;
      font-family: Lato, sans-serif;
      color: #333;
    }

    ul {
      list-style-type: none;
      margin:0;
      padding: 0;
    }
    
    body, p { 
      margin: 0;
    }

    textarea:focus, input:focus{
      outline: none;
    }
    `
  }
  </style>)

  export default global;
