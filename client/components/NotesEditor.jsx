import React from 'react'

import '../css/NoteEditor.less';

const NotesEditor = React.createClass({
    getInitialState(){
        return {
            title: '',
            text: '',
            color: '#FFFFFF'
        }
    },
    handleTextChange(event){
        this.setState({
            text: event.target.value
        })
    },

    handleTitleChange(event){
        this.setState({
            title: event.target.value
        })
    },

    handleColorChange(event){
        this.setState({
            color: event.target.getAttribute('data-color')
        })
    },

    handleNoteAdd(){
        const NewNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(NewNote);
        this.setState({
            title: '',
            text: '',
            color: '#FFFFFF'
        });

    },
    render(){
        return (
            <div className='NoteEditor'>
                <input
                    type='text'
                    className='NoteEditorTitle'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}/>
                <input
                    type='text'
                    className='NoteEditorText'
                    placeholder='Enter text'
                    value={this.state.text}
                    onChange={this.handleTextChange}/>
                <div className='NoteEditorColor'>
                    <div
                        className='NoteEditorColorRed'
                        data-color='#ff0000'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='NoteEditorColorOrange'
                        data-color='#ff8000'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='NoteEditorColorGreen'
                        data-color='#bfff00'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='NoteEditorColorBlue'
                        data-color='#00ffff'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='NoteEditorColorMagento'
                        data-color='#bf00ff'
                        onClick={this.handleColorChange}></div>
                </div>

                <div className='NoteEditorFooter'>
                    <button className='NoteEditorButton'
                            disabled={!this.state.text}
                            onClick={this.handleNoteAdd}>
                        Add
                    </button>
                </div>

            </div>
        )
    }
});

export default NotesEditor;