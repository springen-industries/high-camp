# high camp
Application to pull data from a given set of signals.
- Provides prototype structures for implementing a standardized approach to reading signals on a wide variety of channels.
- Developed using sinon and mocha to define behavioral and unit tests for each feature before its implementation in application code

---
Assertions
- should use Mongo for paged data system
- should provide interface to offload relational data to an arbitrary service endpoint such as postgreSQL and  various cloud based AOS.
- should validate, detect and heal from changes to external endpoints for ETL services
- should provide RESTful services to other systems to provide information in a secure and meaningful manner.

---
Execution:
required globally installed packages: sinon, mocha, yeoman

npm test - runs tests

npm start - runs service

Things service does on startup:
  - should pull a port from somewhere to use
  - should pull security information for accessing external services from a secure location over a secure channel
  - should be able to bring primary Paged and Relational data systems online and write to them
  - should validate all endpoints by cycling through RPC tracking tests
  - should run tests on schedule defined somehwere
