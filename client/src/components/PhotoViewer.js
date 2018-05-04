import React from 'react';

class PhotoViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open,
            photos: [],
            size: 1,
            image: {}
        }
    }

    escFunction(event){
        if (event.keyCode === 27) {
            //Do whatever when esc is pressed
            this.setState({open: false});
            document.getElementById('body').style.overflow = 'auto';
            document.getElementById('gallery').style.paddingTop = '55px';
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => this.escFunction(e), false);
        if (this.props.open) {
            document.getElementById('body').style.overflow = 'hidden';
            document.getElementById('gallery').style.padding = '0';
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('will receive', nextProps);
        if (nextProps.open) {
            document.getElementById('body').style.overflow = 'hidden';
            document.getElementById('gallery').style.padding = '0';
        } else {
            document.getElementById('body').style.overflow = 'auto';
            document.getElementById('gallery').style.paddingTop = '55px';
        }
        this.setState({
            open: nextProps.open,
            image: nextProps.photos[nextProps.viewIdx],
            idx:nextProps.viewIdx,
            size: nextProps.photos.length,
            photos: nextProps.photos});
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", (e) => this.escFunction(e), false);
    }

    next() {
        if (this.state.idx === this.state.size - 1) {
            this.setState({idx: 0, image: this.state.photos[0]});
        } else {
            this.setState({idx: this.state.idx + 1, image: this.state.photos[this.state.idx + 1]});
        }
    }

    prev() {
        if (this.state.idx === 0) {
            this.setState({idx: this.state.size - 1, image: this.state.photos[this.state.size - 1]});
        } else {
            this.setState({idx: this.state.idx - 1, image: this.state.photos[this.state.idx - 1]});
        }
    }


    render() {
        if (this.state.open) {
            return (
                <div className="backdrop frame">
                    <div className="modal-cont">
                        <img className="modal-image"
                             style={{maxHeight: window.innerHeight + 'px'}}
                             src={this.state.image.src} id="modal-img-id"/>
                        <div className="modal-desc row between">
                            <div style={{marginRight: '15px', marginLeft: '3px'}}><strong>{this.state.image.title}</strong></div>
                            <div style={{marginRight: '3px'}}>{this.state.image.size}</div>
                            {this.state.image.extra ? <div style={{marginRight: '3px'}}>{this.state.image.extra}</div> : null}
                        </div>
                        <div id="modal-close">
                            <div className="btn-transparent frame" onClick={() => this.props.closeFunc()}>
                                {/*<i className="fas fa-times" />*/}
                                X
                            </div>
                        </div>
                    </div>
                    <div id="modal-go-left">
                        <div className="btn-transparent frame" onClick={() => this.prev()}>
                            {/*<i className="fas fa-times" />*/}
                            <i className="fas fa-chevron-left" />


                        </div>
                    </div>
                    <div id="modal-go-right">
                        <div className="btn-transparent frame" onClick={() => this.next()}>
                            {/*<i className="fas fa-times" />*/}
                            <i className="fas fa-chevron-right" />


                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div style={{display: 'none'}}></div>
        );

    }

}

export default PhotoViewer;