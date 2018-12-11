class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
    }

    // ...
}

// 可以通过包一层Proxy的方法来解决this指向问题