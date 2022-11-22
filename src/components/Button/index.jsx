import './styles.css'
import { Component } from 'react'

export class Button extends Component {
  render() {
    const { text, onClickLoadMore, disabled } = this.props
    return (
      <button 
        className="button"
        onClick={onClickLoadMore}
        disabled={disabled}
      >
        { text }
      </button>
    )
  }
}