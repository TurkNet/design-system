export PATH=$(npm bin):$PATH

VERSION=`auto version`

## Support for label 'skip-release'
if [ ! -z "$VERSION" ]; then
  ## Update Changelog
  auto changelog


  cd dist
  ## Publish Package
  npm version $VERSION -m "Bump version to: %s [skip ci]"
  npm publish
  cd ..

  ## Create GitHub Release
  git push --follow-tags --set-upstream origin main
  auto release
fi