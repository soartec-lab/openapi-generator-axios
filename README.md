# openapi-generator-axios

Many options need to be specified as arguments when developing using `typescript-axios` of` openapi-generator`.
This repository helps smooth development by organizing those items.

## Usage

### Bash including option specification

```bash
$ ./bin/openapi-generator
```

We have prepared a Bash that is complicated and contains many options. This command does the following:

1. Combine the split YAML files into one schema.

OAS files are often split to improve maintainability. But in the end it needs to be merged into one file. In this Bash, OAS managed in a distributed manner is integrated into one file and output to the `generated` directory.

2. Automatically generate TypeScript source code from OAS.

TypeScript code automatically generated from OAS is output under the `src` directory.

### Description of the generated code

The rules of the generated code are as follows:

* enumNameSuffix=''

```typescript
// enumNameSuffix='Enum'
export enum UserRoleEnum {
  admin = 'admin',
  general = 'general'
}

// enumNameSuffix=''

export enum UserRole {
  admin = 'admin',
  general = 'general'
}
```

* enumPropertyNaming=camelCase

```typescript
export enum UserRole {
  subAdmin = 'subAdmin',
}
```

* modelPropertyNaming=camelCase

```typescript
export interface User {
  firstName: string
}
```


* nullSafeAdditionalProps=true

Specify undefined for nullable properties.

```typescript
export interface User {
  firstName: string | undefined;
}
```

* supportsES6=true

support ES6

* withSeparateModelsAndApi=true

Separate the API connection part and schema model files.
