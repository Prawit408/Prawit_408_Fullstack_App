module.exports = function (ctx) {
    return {
        boot: [],

        css: [
            'app.scss'
        ],

        extras: [
            'roboto-font',
            'material-icons'
        ],

        build: {
            target: {
                browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
                node: 'node16'
            },
        },

        devServer: {
            // ส่วนสำคัญ: ต้องตั้งค่า host เป็น 0.0.0.0 เพื่อให้ Docker เชื่อมต่อได้
            host: '0.0.0.0',
            port: 8080,
            open: false
        },

        framework: {
            config: {},
            plugins: []
        },

        animations: [],
    }
}