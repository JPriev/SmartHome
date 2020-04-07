class User {
    constructor(){
        this.state = {
            id: 0,
            username: "",
            password: "",
            active: false,
            admin: false,
        }
    }

    get getId() {
        return this.state.id;
    }

    get getUsername() {
        return this.state.username;
    }

    get getPassword() {
        return this.state.password;
    }

    get isActive() {
        return this.state.active;
    }

    get isAdmin() {
        return this.state.admin;
    }

    /**
     * @param {number} id
     */
    set setId(id) {
        this.state.id = id;
    }

    /**
     * @param {string} username
     */
    set setUsername(username) {
        this.state.username = username;
    }

    /**
     * @param {string} password
     */
    set setPassword(password) {
        this.state.password = password;
    }

    /**
     * @param {boolean} active
     */
    set setActive(active) {
        this.state.active = active;
    }

    /**
     * @param {boolean} admin
     */
    set setAdmin(admin) {
        this.state.admin = admin;
    }
}

export default User;