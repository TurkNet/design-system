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
  yarn build-library
  cd dist
  npm publish
  cd ..

  ## Create GitHub Release
  git push --follow-tags --set-upstream origin main
  auto release --base-branch=main
fi