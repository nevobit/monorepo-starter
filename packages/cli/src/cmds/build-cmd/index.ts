import type { Command } from "commander";
import { runTurbo } from "../../lib/exec.js";

export function registerBuild(program: Command) {
  program
    .command("build")
    .option("-f, --filter <workspace>", "filter workspace (e.g. apps/web)")
    .description("Run turbo build across the {{packageName}} or for a single workspace.")
    .addHelpText("after", `
Examples:
  $ {{packageName}} build
  $ {{packageName}} build -f apps/web
`)
    .action(async (opts: { filter?: string }) => {
      const args = ["run", "build"];
      if (opts.filter) args.push("--filter", opts.filter);
      await runTurbo(args);
    });
}
