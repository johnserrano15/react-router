import React, { PureComponent } from'react';
import'./generic-page.css';

class NotFound extends PureComponent {

  handleForward = () => {
    this.props.history.goForward()
  }
  handleBack = () => {
    // this.props.history.goBack()
    this.props.history.go(-1)
  }
  handleVideo = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`, { id: random})
  }
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button onClick={this.handleForward}>
          Ir a la siguiente ruta
        </button>
        <button onClick={this.handleBack}>
          Ir a la anterior ruta
        </button>
        <button onClick={this.handleVideo}>
          Ir a video random
        </button>
      </div>
    )
  }
}

export default NotFound