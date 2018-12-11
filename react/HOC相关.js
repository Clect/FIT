// 高阶组件 暨一个函数输入一个组件，并且输出也是一个组件
// 类似 工厂模式

export default connect(mapStateToProps, mapDispatchToProps)(Component);

// connect返回的是一个高阶函数，Component为传参
// mapStateToProps和mapDispatchToProps经过高阶函数，封装到props里面去

// 高阶函数有两种形式： 1、代理方式   2、继承方式

function proxyFn(OldComponent) {
    return class NewComponent extends React.Component {
        render() {
            const { user, ...otherProps } = this.props;
            return <OldComponent {...otherProps} />
        }
    }
}

function extendFn(OldComponent) {
    return class NewComponent extends OldComponent {
        render () {
            const { user, ...otherProps } = this.props;
            this.props = otherProps;
            return super.render();
        }
    }
}
