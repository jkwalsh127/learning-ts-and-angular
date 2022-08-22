

// command: ng g s <name>
// angular generate service <name>

// generates the ts service file, and a spec file with boilerplate code for writing unit tests
// in the ts file, there is an "@Injectable()" decorator function which is used only if there are dependencies within the constructor. This allows angular to inject dependencies of the class within the constructor. Note that this was not used when defining components, because using the @Component decorator automatically includes this @Injectable decorator