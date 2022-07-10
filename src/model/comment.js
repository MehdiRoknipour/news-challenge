class Comment {
    constructor() {
        this.init();
    }

    init() {
        this.list = JSON.parse(localStorage.getItem("user-comments"));
    }

    /**
     *
     * @param id number
     * @param title string
     * @param thumbnailUrl string
     * @param comment string
     * @param callback function
     */
    set(id, title, thumbnailUrl, comment, callback) {
        const userComments = JSON.parse(localStorage.getItem("user-comments"));

        let newData = [{ id, title, thumbnailUrl, comment }];

        if (userComments) {
            newData = [...userComments, ...newData];
        }

        localStorage.setItem("user-comments", JSON.stringify(newData));

        this.init();

        callback();
    }

    /**
     *
     * @param id number
     */
    get(id) {
        const userComments = JSON.parse(localStorage.getItem("user-comments"));
        if (!userComments) return;

        let filtered = userComments.filter((el) => el.id == id);
        if (filtered) return filtered; // prevent duplicate
        return [];
    }

    /**
     * Remove all user's data from local storage
     * @param callback function
     */
    destroy(id, callback) {
        const tmp = JSON.parse(localStorage.getItem("user-comments"));

        let newData = [{}];

        if (tmp) {
            newData = tmp.filter((el) => el.id != id);
            localStorage.setItem("user-comments", JSON.stringify(newData));
            this.init();
        }

        callback();
    }
}

export default new Comment();
