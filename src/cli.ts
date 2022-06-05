import { cac } from "cac"
import { Pkg } from "../types"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg: Pkg = require("../package.json") as Pkg

const cli = cac("awesome-cli")

cli.help()
cli.version(pkg.version)

cli.parse()
