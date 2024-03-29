<!--
 * @Author: Hong.Zhang
 * @Date: 2024-01-17 15:56:53
 * @Description: 
-->
# egg-boot

egg boot

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
npm i
npm run dev
open http://localhost:7001/
```

### Deploy

```bash
npm start
npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.

[egg]: https://eggjs.org


## ENV
- EGG_SERVER_ENV is mainly for config.[xxx].js and other features like logs
- dotenv with env.[xxx] is for process.env, mainly for prisma
- forget NODE_ENV for eggjs