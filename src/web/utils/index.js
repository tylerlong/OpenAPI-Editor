export const defaultValue = {
  openapi: '3.0.1',
  info: {
    title: '',
    description: '',
    termsOfService: '',
    contact: {
      name: '',
      url: '',
      email: ''
    },
    license: {
      name: '',
      url: ''
    },
    version: ''
  },
  servers: [],
  paths: {},
  components: {
    schemas: {},
    responses: {},
    parameters: {},
    examples: {},
    requestBodies: {},
    headers: {},
    securitySchemes: {},
    links: {},
    callbacks: {}
  },
  security: [],
  tags: [
    {
      name: 'name1',
      description: 'description1'
    },
    {
      name: 'name2',
      description: 'description2'
    }
  ],
  externalDocs: {
    description: '',
    url: ''
  }
}

export const dataTypes = {
  integer: ['int32', 'int64'],
  number: ['float', 'double'],
  boolean: [],
  string: ['', 'byte', 'binary', 'date', 'date-time', 'password']
}

export const update = self => {
  return (key, value) => {
    if (self[key] === undefined) {
      throw new Error(`Unknown key '${key}'`)
    }
    self[key] = value
  }
}
