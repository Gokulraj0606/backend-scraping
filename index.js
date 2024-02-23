const cors = require("cors")
const app = require("./app")
const path = require("path")
const connectDatabase = require("./config/database")


connectDatabase()
app.use(cors())
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening to the port : ${process.env.PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`)
    console.log("shutting down the server due to unhandle rejection error")
    server.close(() => {
        process.exit(1)
    })
})

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log("shutting down the server due to uncaught exception rejection error")
    server.close(() => {
        process.exit(1)
    })
})