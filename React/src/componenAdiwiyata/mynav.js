import React, { Component } from 'react'

class MyNav extends Component {
    render() {
        return (
            <div className={"row "+ this.props.type}>
                <div className="col">
                    <div className="nav-title">
                        <h1>{this.props.children}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyNav