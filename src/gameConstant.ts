import fetch from "node-fetch";

type Season = {
    id: number;
    season: string;
};

type SeasonResponse = [
    Season[],
];

/**
 * @method static seasons
 * @method static queues
 * @method static maps
 * @method static gameModes
 * @method static gameTypes
 */
export class GameConstant {

    static url: string = 'https://static.developer.riotgames.com/docs/lol/%s.json';

    static async seasons() { return this._fetch('seasons') }
    static async queues() { return this._fetch('queues') }
    static async maps() { return this._fetch('maps') }
    static async gameModes() { return this._fetch('gameModes') }
    static async gameTypes() { return this._fetch('gameTypes') }

    static async _fetch(path :string) {
        const _url = GameConstant.url.replace('%s', path)
        try {
            const response = await fetch(_url, {
                method: 'GET',
                headers: {Accept: 'application/json'},
            })
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            return (await response.json()) as SeasonResponse
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

}