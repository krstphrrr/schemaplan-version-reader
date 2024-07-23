# Read schemaplan version action

## example workflow
`schemaPlan-2.0.44.csv`


`.github/workflow/test.yml`
```yml
name: Get version from package.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read package.json
        uses: krstphrrr/schemaplan-version-reader@v1
        with:
          path: "./schema_versions/semver/"
        id: schema-version

      - name: Show version number
        run: echo "Version is ${{ steps.schema-version.outputs.version }}"
        # Version is 2.0.44
```
