import HttpMethods from "..";


const Users= {
    getUsers : async (token: string, queryParams : {[key:string]: string | number}) => {
        return HttpMethods
          .get(`/api/`, {
            params: {...queryParams},
            headers: { Authorization: token },
          })
          .then((res) => res.data);
      }
}

export default Users;