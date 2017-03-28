import React from 'react';

const Note = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };

        return (
            <div className='Note' style={style}>
                <a href="#"><span className='NoteDel' onClick={this.props.onDelete}> X </span></a>
                {
                    this.props.title
                        ?
                        <h4 className='NoteTitle'>{this.props.title}</h4>
                        :
                        null
                }
                <div className='NoteText'>{this.props.children}</div>
            </div>
        );
    }
});

export default Note;