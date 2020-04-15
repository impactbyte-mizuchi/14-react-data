import React, { Component } from "react";

export class Card extends Component {
    render() {
        return (
            <div>
                <p>Nama Card</p>
                <p>Deskripsi Card</p>
                <p>Alamat rumah</p>
            </div>
        );
    }
}

export class CardAbout extends Component {
    render() {
        return (
            <div>
                <p>Nama Card</p>
                <p>Deskripsi Card</p>
                <p>Alamat rumah</p>
                <p>Nomor Telepon</p>
            </div>
        );
    }
}

export class Button extends Component {
    render() {
        return <button>Click Saya</button>;
    }
}
