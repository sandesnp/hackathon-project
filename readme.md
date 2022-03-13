# sync changes(for .env compare with .env.example)

1. git pull origin <branch>

# install dependencies

2. npm

# build dist

3. npm build

# run migration (if any)

4. npm typeorm migration:run

# start service:

5. pm2 start dist/main.js --name <name>:<port>
