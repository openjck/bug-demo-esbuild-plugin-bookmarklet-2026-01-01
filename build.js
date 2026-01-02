import * as esbuild from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import bookmarkletPlugin from "https://deno.land/x/esbuild_plugin_bookmarklet@v1.0.0/mod.js";

esbuild.build({
  entryPoints: ["example1.js", "example2.js", "example3.js"],
  bundle: true,
  minify: true,
  outdir: "dist",
  write: false,
  format: "iife",
  plugins: [bookmarkletPlugin],
  target: ["chrome58", "firefox57", "safari11", "edge16"],
});
