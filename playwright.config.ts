import {PlaywrightTestConfig} from '@playwright/test'
const { devices } = require("@replayio/playwright");

const config: PlaywrightTestConfig = {
  reporter: 'list',
  testDir: 'test/fixture',

  // projects: [
  //   {
  //     name: "replay-firefox",
  //     use: {
  //       ...devices["Replay Firefox"],
  //     },
  //   },
  // ],
}

export default config
