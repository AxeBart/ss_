const app = require('express')();
const server = require('http').createServer(app);
const { Server } = require('socket.io')
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: '*' // allow all origins

}))
const io = new Server(server, {
    path : "/socket",
    cors: {
        origin: "*",
        methods: ["GET", "POST"], // Méthodes autorisées
    }
});

io.on('conection', (socket) => {
    socket.emit('init', 'you are connected')
})


app.get('/test', (req, res) => {
    res.send({ app: "work" })
    res.end()
})

server.listen(process.env.PORT || 3000)