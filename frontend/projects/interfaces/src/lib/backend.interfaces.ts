// Shape of data that backend returns

export interface LoginSuccess {
  access_token: string;
  //   refresh_token: string;
}

export interface OID {
  $oid: string;
}

export interface UserCategory {
  _id: OID;
  name: string;
}
