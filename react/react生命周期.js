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

// 1、getDefaultProps
// 2、getInitialState
// 3、componentWillMount
// 4、render
// 5、componentDidMount

// 1、componentWillReceiveProps
// 2、shouldComponentUpdate
// 3、componentWillUpdate
// 4、render
// 5、componentDidUpdate