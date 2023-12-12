interface Coordinates {
    latitude: string;
    longitude: string;
  }
  
  interface Street {
    number: number;
    name: string;
  }
  
  interface Timezone {
    offset: string;
    description: string;
  }
  
  interface Login {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  }
  
  interface Name {
    title: string;
    first: string;
    last: string;
  }
  
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  interface Registered {
    date: string;
    age: number;
  }
  
  export interface User {
    cell: string;
    dob: {
      age: number;
      date: string;
    };
    email: string;
    gender: string;
    id: {
      name: string;
      value: null;
    };
    location: {
      city: string;
      coordinates: Coordinates;
      country: string;
      postcode: number;
      state: string;
      street: Street;
      timezone: Timezone;
    };
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registered: Registered;
  }