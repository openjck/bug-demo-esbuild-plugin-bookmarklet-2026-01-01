.PHONY: build

build:
	mkdir --parents dist
	deno --allow-all build.js
