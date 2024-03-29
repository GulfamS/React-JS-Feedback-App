import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="container">
        <div className="emoji-card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div>
            <ul className="emoji-list">
              {emojis.map(eachEmoji => (
                <li key={eachEmoji.id}>
                  <button
                    type="button"
                    className="emoji-btn"
                    onClick={this.onClickEmoji}
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                      className="emoji"
                    />
                    <br />
                    <span className="emoji-name">{eachEmoji.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <div className="thank-you-card">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="thank-heading">Thank You!</h1>
          <p className="feedback">
            We Will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
