import arg from "arg";

function argumentOptionsParser(rawArguments) {
  let args = arg(
    {
      "--git": Boolean,
      "--help": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "--g": "--git",
      "--h": "--help",
      "--y": "--yes",
      "--i": "--install",
    },
    {
      argv: rawArguments.slice(2),
    }
  );
  return {
    template: args._[0],
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    runInstall: args["--install"] || false,
  };
}

export function interfaceCommand(args) {
  let opts = argumentOptionsParser(args);
  console.log(opts);
}
