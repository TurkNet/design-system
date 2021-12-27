export PATH=$(npm bin):$PATH

VERSION=`auto version`
export GH_TOKEN=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
export NPM_TOKEN=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

## Support for label 'skip-release'
if [ ! -z "$VERSION" ]; then
  ## Update Changelog
  auto changelog

  ## Publish Package
  npm version $VERSION -m "Bump version to: %s [skip ci]"
  cd dist
  npm publish
  cd ..

  ## Create GitHub Release
  git push --follow-tags --set-upstream origin main
  auto release --base-branch=main
fi