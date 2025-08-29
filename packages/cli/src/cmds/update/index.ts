import type { Command } from "commander";
import { runPnpm } from "../../lib/exec.js";

export function registerUpdate(program: Command) {
  program
    .command("update")
    .argument("<dep>", "dependency name")
    .argument("[workspace]", "workspace name (optional)")
    .description("Update a dependency in the whole repo or a single workspace.")
    .addHelpText("after", `
Examples:
  # Update react everywhere
  $ repo update react

  # Update react only in apps/web
  $ repo update react web
`)
    .action(async (dep: string, ws?: string) => {
      if (ws) return runPnpm(["-C", `apps/${ws}`, "update", dep]);
      return runPnpm(["update", dep]);
    });
}
