import fetch from "node-fetch";

export class DataDragon {

    static url: string = 'https://ddragon.leagueoflegends.com/:path/:method.json'

    public static async versions() { return this._fetch('versions') }
    public static async regions() { return this._fetch('regions')}
    public static async realms() { return this._fetch('realms')}
    public static async br() { return this._fetch('br')}
    public static async eune() { return this._fetch('eune')}
    public static async euw() { return this._fetch('euw')}
    public static async garena() { return this._fetch('garena')}
    public static async jp() { return this._fetch('jp')}
    public static async kr() { return this._fetch('kr')}
    public static async lan() { return this._fetch('lan')}
    public static async las() { return this._fetch('las')}
    public static async na() { return this._fetch('na')}
    public static async oce() { return this._fetch('oce')}
    public static async pbe() { return this._fetch('pbe')}
    public static async ru() { return this._fetch('ru')}
    public static async tencent() { return this._fetch('tencent')}
    public static async tr() { return this._fetch('tr')}
    public static async tw() { return this._fetch('tw')}
    public static async languages() { return this._fetch('languages')}
    public static async champion(args: string[]) {
        return this._fetch('champion', args)
    }
    public static async item(args: string[]) {
        return this._fetch('item', args)
    }
    public static async summoner(args: string[]) {
        return this._fetch('summoner', args)
    }
    public static async profileicon(args: string[]) {
        return this._fetch('profileicon', args)
    }

    private static _pathByMethod($method: string, args: string[] = []): string {
        switch ($method) {
            case 'languages':
                return 'cdn'
            case 'versions':
            case 'realms':
                return 'api'
            case 'champion':
            case 'item':
            case 'summoner':
            case 'profileicon':
                return `cdn/${args[0]}/data/${args[1]}`
            case 'jp':
            case 'kr':
            case 'na':
            case 'ru':
            case 'tr':
            case 'br':
            case 'tw':
            case 'euw':
            case 'lan':
            case 'las':
            case 'oce':
            case 'pbe':
            case 'eune':
            case 'garena':
            case 'tencent':
                return 'realms'
            default:
                return ''
        }
    }

    private static async _fetch(method :string, args :string[] = []) {
        const _path = DataDragon._pathByMethod(method, args)
        const _url = DataDragon.url
            .replace(':path', _path)
            .replace(':method', method)
        try {
            const response = await fetch(_url, {
                method: 'GET',
                headers: {Accept: 'application/json'},
            })
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            return (await response.json())
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