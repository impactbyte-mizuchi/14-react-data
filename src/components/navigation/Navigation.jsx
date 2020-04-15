import React from "react";

export const Navigation = (props) => {
    return (
        <div>
            <ul>
                <li>{props.home}</li>
                <li>{props.about}</li>
                <li>{props.contact}</li>
                <li>Tambah baru</li>
                <li>tambah lagi satu</li>
            </ul>
        </div>
    );
};

export const Profile = () => {
    return (
        <div>
            <p>Nama Saya Miftah Faris</p>
            <p>Saya adalah tech mentor</p>
        </div>
    );
};
