# nodejs-riot-games-api
Node.js Wrapper for Riot Games API

## Install

```shell
$ npm install nodejs-riot-games-api
```

## Usage

### GameConstant

```node
import {GameConstant} from "../src/gameConstant";
const seasons = await GameConstant.seasons()
// [{"id": 0, "season": "PRESEASON 3"}, {"id": 1, "season": "SEASON 3"}, ...
```