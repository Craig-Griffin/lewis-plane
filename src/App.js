import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {GLTFModel,AmbientLight,DirectionLight} from 'react-3d-viewer'


import plane from './test_plane.glb'


class App extends React.Component {


    render() {
        return (
            <div className="modelContainer">



                <GLTFModel
                    src={plane}
                    width={2000}
                    height={1000}


                >
                </GLTFModel>

            </div>
        );
    }
}

export default App;
