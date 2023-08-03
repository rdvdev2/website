export class Social {
    _name: String;
    _link: URL;

    constructor(name: String, link: URL) {
        this._name = name;
        this._link = link;
    }

    static fromRawObject(object: {name: string, link: string}) {
        return new Social(object.name, new URL(object.link));
    }

    static parseJSONArray(data: string) {
        return JSON.parse(data).map(this.fromRawObject);
    }

    get name() {
        return this._name;
    }

    get link() {
        return this._link;
    }

    get id() {
        return this.name.toLowerCase().replace('-', '');
    }

    get logo(): Promise<URL> {
        return import(`../../assets/images/socials/${this.id}.svg`)
            .then(value => new URL(value.default, location.toString()));
    }
}