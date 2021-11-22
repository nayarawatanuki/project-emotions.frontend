import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
     
    render() {
        const { onUpload } = this.props;

        return (
            <Dropzone accept="*" onDropAccepted={onUpload} multiple={false} maxFiles={1}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {... getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                ) }
            </Dropzone>
        );
    }
}