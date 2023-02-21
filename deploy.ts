#!/usr/bin/env deno

import { $, cd } from "https://deno.land/x/dzx@0.4.0/mod.ts";

await $`lume`;

cd("_site");

await $`git init`;
await $`git add -A`;

await $`git push -f git@github.com:uvacoder/port-deno-reese.git master:main`;
