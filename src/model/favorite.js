class Favorites {
    constructor() {
        this.init();
    }

    init() {
        this.list = JSON.parse(localStorage.getItem("user-favorites"));
    }

    /**
     *
     * @param id number
     * @param title string
     * @param thumbnailUrl string
     * @param callback function
     */
    set(id, title, thumbnailUrl, callback) {
        const userFavorites = JSON.parse(localStorage.getItem("user-favorites"));

        let newData = [{ id, title, thumbnailUrl }];

        if (userFavorites) {
            newData = [...userFavorites, ...newData];
        }

        localStorage.setItem("user-favorites", JSON.stringify(newData));

        this.init();

        callback();
    }

    /**
     *
     * @param id number
     */
    get(id) {
        const userFavorites = JSON.parse(localStorage.getItem("user-favorites"));
        if (!userFavorites) return;

        let filtered = userFavorites.filter((el) => el.id == id);
        if (filtered) return filtered; // prevent duplicate
        return [];
    }

    /**
     * Remove all user's data from local storage
     * @param callback function
     */
    destroy(id, callback) {
        const tmp = JSON.parse(localStorage.getItem("user-favorites"));

        let newData = [{}];

        if (tmp) {
            newData = tmp.filter((el) => el.id != id);
            localStorage.setItem("user-favorites", JSON.stringify(newData));
            this.init();
        }

        callback();
    }
}

export default new Favorites();
