// father constructor
// father componentWillMount
// father render
// test1 constructor
// test1 componentWillMount
// test1 render
// test2 constructor
// test2 componentWillMount
// test2 render
// test1 componentDidMount
// test2 componentDidMount
// father componentDidMount

class TestPage extends BaseComponent {
    constructor(props, context) {
        super(props, context);
        console.log("father constructor");
    }

    componentWillMount() {
        console.log("father componentWillMount");
    }

    componentDidMount() {
        console.log("father componentDidMount");
    }

    componentWillReceiveProps() {
        console.log("father componentWillReceiveProps");
    }

    render() {
        return (
        <div>
            <Test1 />
            <Test2 />
        </div>
        );
    }
}