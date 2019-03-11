import Header from './Header'
import React, {Component} from 'react'

class App extends Component
{
    state = {
        pageHeader: 'Naming Contests'
    }
    render()
    {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
                <div>
                    ...
                </div>
            </div>
        )   
    }
}

export default App