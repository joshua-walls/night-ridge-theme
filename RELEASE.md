# Release Notes

This file is for maintainers.

## Changelog

### 0.1.0

- Forked the current Trailmark theme into the separate Night Ridge theme directory.
- Reset `manifest.json` to `0.1.0`.
- Reworked theme colors to the Night Ridge 3.1 baseline and accent order: Pine, Copper, Lichen, Ember, Slate, and Seafoam.

## Local Build

Local helper scripts may create a release zip in `dist/`, but they are not part of the repository. The install zip should contain a `Night Ridge` folder with only `manifest.json` and `theme.css`.

Before building a local artifact, update `manifest.json` to the target version.

## Publish a Release

Publishing follows the same release-branch flow as Forge and Lockblock.

```sh
git switch -c release/0.1.0
git add manifest.json theme.css RELEASE.md .github/workflows
git commit -m "release: v0.1.0"
git push -u origin release/0.1.0
```

Open a PR from `release/<version>` into `main`. When that PR is merged, `.github/workflows/tag-release.yml` creates the matching tag, builds `Night Ridge-<version>.zip`, attests it, and publishes the GitHub Release.

Before publishing a release, confirm that the `version` field in `manifest.json` exactly matches the release branch suffix and final tag. Obsidian community themes expect `0.1.0`, not `v0.1.0`.

## Obsidian Community Theme Entry

Suggested entry for `community-css-themes.json`:

```json
{
  "name": "Night Ridge",
  "author": "Joshua Walls",
  "repo": "joshua-walls/night-ridge-theme",
  "screenshot": "screenshot.png",
  "modes": ["dark", "light"]
}
```
