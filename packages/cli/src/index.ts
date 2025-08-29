import { Command } from "commander";
import { registerInstall } from "./cmds/install";
import { registerAdd } from "./cmds/add";
import { registerUpdate } from "./cmds/update";
import { registerBuild } from "./cmds/build";
import { registerDev } from "./cmds/dev";
import { registerTest } from "./cmds/test";
import { registerDeploy } from "./cmds/deploy";
import { registerPath } from "./cmds/path";
import { registerX } from "./cmds/x";
import { registerSyncEnv } from "./cmds/sync-env";
import { registerKillPorts } from "./cmds/kill-ports";
import { registerPreflight } from "./cmds/preflight";
import { registerGen } from "./cmds/gen";
import { registerClean } from "./cmds/cleanup";
import { registerPull } from "./cmds/pull";
import { registerPush } from "./cmds/push";
import { registerSync } from "./cmds/sync";
import { registerGenContract } from "./cmds/gen-contract";



const program = new Command();
program.name("repo").description("Monorepo CLI").version("0.5.0");

registerInstall(program);
registerAdd(program);
registerUpdate(program);
registerBuild(program);
registerDev(program);
registerTest(program);
registerDeploy(program);
registerPath(program);
registerX(program);
registerSyncEnv(program);
registerKillPorts(program);
registerPreflight(program);
registerGen(program);
registerClean(program);
registerPull(program);
registerPush(program);
registerSync(program);
registerGenContract(program);

program.parseAsync();