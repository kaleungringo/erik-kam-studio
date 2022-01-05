import React from 'react';
import './studentworks.css';

import Gallery from "react-photo-gallery";
import { photos } from "./Photos";

const BasicRows = () => <Gallery photos={photos} />;

const StudentWorks = () => {
    return (

    <BasicRows />
        
    )
}

export default StudentWorks
