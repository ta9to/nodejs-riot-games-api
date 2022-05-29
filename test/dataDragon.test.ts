import {DataDragon} from "../src/dataDragon";

test('versions', async () => {
    const actual = await DataDragon.versions()
    expect(Array.isArray(actual)).toEqual(true)
});

test('regions', async () => {
    const actual = await DataDragon.regions()
    expect(Array.isArray(actual)).toEqual(true)
});

test('realms', async () => {
    const actual = await DataDragon.realms()
    expect(Array.isArray(actual)).toEqual(true)
});

test('realms', async () => {
    const actual = await DataDragon.realms()
    expect(Array.isArray(actual)).toEqual(true)
});

test('br', async () => {
    const actual = await DataDragon.br()
    expect(actual).toHaveProperty('cdn')
});

test('eune', async () => {
    const actual = await DataDragon.eune()
    expect(actual).toHaveProperty('cdn')
});

test('euw', async () => {
    const actual = await DataDragon.euw()
    expect(actual).toHaveProperty('cdn')
});

test('garena', async () => {
    const actual = await DataDragon.garena()
    expect(actual).toHaveProperty('cdn')
});

test('jp', async () => {
    const actual = await DataDragon.jp()
    expect(actual).toHaveProperty('cdn')
});

test('kr', async () => {
    const actual = await DataDragon.kr()
    expect(actual).toHaveProperty('cdn')
});

test('lan', async () => {
    const actual = await DataDragon.lan()
    expect(actual).toHaveProperty('cdn')
});

test('las', async () => {
    const actual = await DataDragon.las()
    expect(actual).toHaveProperty('cdn')
});

test('na', async () => {
    const actual = await DataDragon.na()
    expect(actual).toHaveProperty('cdn')
});

test('oce', async () => {
    const actual = await DataDragon.oce()
    expect(actual).toHaveProperty('cdn')
});

test('pbe', async () => {
    const actual = await DataDragon.pbe()
    expect(actual).toHaveProperty('cdn')
});

test('ru', async () => {
    const actual = await DataDragon.ru()
    expect(actual).toHaveProperty('cdn')
});

test('tencent', async () => {
    const actual = await DataDragon.tencent()
    expect(actual).toHaveProperty('cdn')
});

test('tr', async () => {
    const actual = await DataDragon.tr()
    expect(actual).toHaveProperty('cdn')
});

test('tw', async () => {
    const actual = await DataDragon.tw()
    expect(actual).toHaveProperty('cdn')
});

test('languages', async () => {
    const actual = await DataDragon.languages()
    expect(Array.isArray(actual)).toEqual(true)
});

test('champion', async () => {
    const actual = await DataDragon.champion(['11.13.1', 'en_US'])
    expect(actual).toHaveProperty('data')
});

test('item', async () => {
    const actual = await DataDragon.item(['11.13.1', 'en_US'])
    expect(actual).toHaveProperty('data')
});

test('summoner', async () => {
    const actual = await DataDragon.summoner(['11.13.1', 'en_US'])
    expect(actual).toHaveProperty('data')
});

test('profileicon', async () => {
    const actual = await DataDragon.profileicon(['11.13.1', 'en_US'])
    expect(actual).toHaveProperty('data')
});