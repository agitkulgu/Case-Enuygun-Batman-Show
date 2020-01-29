import React, { Component } from 'react'


class App extends React.Component {

    constructor(props) {
  
        super(props);
  
        this.state = {
            items: [],
            isLoaded: false
        }
  
    }
    componentDidMount() {
  
        fetch('http://api.tvmaze.com/search/shows?q=batman')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
  
    }
  
    render() {
  
        const { isLoaded, items } = this.state;
  
        if (!isLoaded)
            return <div>Loading...</div>;
  
        return (
            
            <div>
            <h1>Batman TV Show</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <a href={item.show.url}>{item.show.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
  
    }
  
  }
  
  export default App;
