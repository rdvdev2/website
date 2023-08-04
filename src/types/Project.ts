export class Project {
    _name: String;
    _short_description: String;
    _card_background_image: URL;
    
    constructor(name: String, short_description: String, card_background_image: URL) {
        this._name = name;
        this._short_description = short_description;
        this._card_background_image = card_background_image;
    }
    
    static fromRawObject(object: {name: string, short_description: string, card_background_image: string}) {
        return new Project(object.name, object.short_description, new URL(object.card_background_image));
    }
    
    static parseJSONArray(data: string) {
        return JSON.parse(data).map(this.fromRawObject);
    }
    
    get name() {
        return this._name;
    }
    
    get short_description() {
        return this._short_description;
    }
    
    get card_background_image() {
        return this._card_background_image;
    }
}