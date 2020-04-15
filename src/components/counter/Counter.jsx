import React, { useState } from "react";

export class ClassCounter extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.count}</h3>
                <button onClick={this.props.addCounter}>+</button>
                <button onClick={this.props.changeName}>Ubah Nama</button>
            </div>
        );
    }
}

export const FunctionCounter = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("miftah");
    const [values, setValues] = useState({
        number: 0,
        name: "miftah",
        changeTag: false,
    });

    const addCounter = () => {
        // this.setState({ count: count + 1 }); // class component
        setCount(count + 1);
        setValues({ ...values, number: values.number + 1 }); // 0 + 1, ...n + 1
    };

    const changeName = () => {
        setName("Faris");
        setValues({
            ...values,
            name:
                "loreeeehgfhgfjfjhjcfgfgchgfcjhgfhjgfhcgfhfjhcfhfjhchgfhgfhgchfhgfhgc",
        });
    };

    const changeTag = () => {
        setValues({ ...values, changeTag: !values.changeTag });
    };
    return (
        <div>
            <h1>{values.name === "" ? name : values.name}</h1>
            <h3>{values.number}</h3>
            <button onClick={addCounter}>+</button>
            <button onClick={changeName}>Ubah Name</button>
            {values.changeTag ? <p>heelo p</p> : <h1>hello h1</h1>}
            <button onClick={changeTag}>Ubah Tag</button>
        </div>
    );
};
