import chalk from "chalk";
import fs from "fs";
import path from "path";
import ncp from "ncp";
import { promisify } from "util";

// access
const access = promisify(fs.access);

// reccusive copy
const copy = promisify(ncp);
