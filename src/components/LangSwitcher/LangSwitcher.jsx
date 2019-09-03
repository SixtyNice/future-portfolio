import React,{ Component } from 'react'
import './LangSwitcher.css';

export default class LangSwitcher extends Component {

  state={
      ln:"EN"
  }

    render() {
        return (
            <span className="lang-switch">
                {this.state.ln}
            </span>
        )
    }
}


