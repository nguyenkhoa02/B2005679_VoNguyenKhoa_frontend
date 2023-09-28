import createApiClient from "./api.service";

class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    }

    async getAll(){
        return(await this.api.get("/")).data;
    }

    async create(data) {
        return (await this.api.delete("/")).data;
    }

    async deleteAll(data) {
        return (await this.api.delete("/")).data;
    }

    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    async update(id, data) {
        reuturn (await this.api.put(`/${id}`, data)).data;
    }

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactService();