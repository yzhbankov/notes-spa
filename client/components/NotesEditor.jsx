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
        document.querySelectorAll('.colorPicker').forEach(function(item){
           item.removeAttribute('id');
        });
        event.target.setAttribute('id', "activeColorBtn");

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
                        className='colorPicker NoteEditorColorWhite'
                        data-color='white'
                        id='activeColorBtn'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorRed'
                        data-color='#ff0000'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorOrange'
                        data-color='#ff8000'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorGreen'
                        data-color='#bfff00'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorBlue'
                        data-color='#00ffff'
                        onClick={this.handleColorChange}></div>
                    <div
                        className='colorPicker NoteEditorColorMagento'
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