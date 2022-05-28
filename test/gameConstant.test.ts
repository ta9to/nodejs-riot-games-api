import {GameConstant} from "../src/gameConstant";

test('seasons', async () => {
    const seasons = await GameConstant.seasons()
    expect(Array.isArray(seasons)).toEqual(true)
});

test('queues', async () => {
    const seasons = await GameConstant.queues()
    expect(Array.isArray(seasons)).toEqual(true)
});

test('maps', async () => {
    const seasons = await GameConstant.maps()
    expect(Array.isArray(seasons)).toEqual(true)
});

test('gameModes', async () => {
    const seasons = await GameConstant.gameModes()
    expect(Array.isArray(seasons)).toEqual(true)
});

test('gameTypes', async () => {
    const seasons = await GameConstant.gameTypes()
    expect(Array.isArray(seasons)).toEqual(true)
});