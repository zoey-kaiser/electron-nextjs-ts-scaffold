import {makeAutoObservable, runInAction} from "mobx";

class NameStore {

    name: string | null = "Human";

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async setName(name) {
        runInAction(() => {
            this.name = name;
        });
    }
}

const nameStore = new NameStore()
export default nameStore
