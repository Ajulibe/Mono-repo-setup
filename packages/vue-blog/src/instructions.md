# **INSTALLING APOLLO CODEGEN**

1. Install apollo globally using `npm install -g apollo`
2. Download a schema for your graphql endpoint `yarn run apollo client:download-schema --endpoint=https://api-eu-central-1.graphcms.com/v2/ckxqls7kr0fwu01z3astagvn0/master output.gql`
3. Generate the types based on the schema file generated`yarn run apollo client:codegen --target typescript --localSchemaFile output.gql --outputFlat --includes "src/**" --excludes "src/generated" src/generated --watch`
4. Alternatively, download the schema and the types in one line of code.`yarn run apollo client:codegen --target typescript --endpoint=https://api-eu-central-1.graphcms.com/v2/ckxqls7kr0fwu01z3astagvn0/master --outputFlat --includes "src/**" --excludes "src/generated" src/generated --watch`
