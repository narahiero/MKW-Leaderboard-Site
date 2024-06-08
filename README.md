Running the project any%

You will need:

- Docker
- .NET 6 (or alternatively upgrading the project to the latest version, this should be done at some point anyway)
- NodeJS

1. Build and start the database by running ```docker-compose up``` at the project root
2. Add a file called appsettings.json to the root of the project with the connection string password value filled in. There is a template at the root of the project. Default password can be found from ```docker-compose.yml```
3. Run the backend either through the IDE or with ```dotnet run```
4. In the ```ClientApp``` folder, install the necessary modules with ```npm install --legacy-peer-deps``` (modules are definitely due for an update, there is a bunch of deprecated stuff here)
5. Run the frontend in the ```ClientApp``` folder with ```npm start```
6. The project should now be running at http://localhost:5001
7. Run the MKL/PP import script to populate the database with some data
