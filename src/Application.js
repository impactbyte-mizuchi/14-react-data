import React from "react";
import { Navigation, Profile } from "./components/navigation/Navigation";
import { Card, CardAbout } from "./components/card/Card";
import { ClassCounter, FunctionCounter } from "./components/counter/Counter";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0, // bisa [], [{}], {}
            name: "miftah",
        };
    }

    addCounter = () => {
        // cara 1
        this.setState((prevState) => {
            return { ...prevState, count: this.state.count + 1 };
        }); // 0 + 1, 1 + 1, ..... n + 1
    };

    changeName = () => {
        // cara 2
        this.setState({ name: "faris" });
    };

    render() {
        const halaman = "about";
        return (
            <div>
                <h1>Function Component</h1>
                {/* set props to child */}
                <Navigation
                    home="Beranda"
                    contact="Kontak Kami"
                    about="Tentang"
                />
                {halaman === "about" ? (
                    <CardAbout />
                ) : (
                    halaman === "contact" && <Card />
                )}
                <Profile />
                <h2>Counter</h2>
                <FunctionCounter
                    count={this.state.count}
                    addCounter={this.addCounter}
                />
                <h1>Class Component</h1>
                <h2>Counter</h2>
                <ClassCounter
                    name={this.state.name}
                    count={this.state.count}
                    addCounter={this.addCounter}
                    changeName={this.changeName}
                />
            </div>
        );
    }
}

export default App;
