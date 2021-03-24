const bridge = require('./bridge')

const app = new bridge()

app.hydrateContainer(container => {
    require('./Providers/DatabaseProvider')(container)
})

app.start()