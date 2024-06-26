#!/bin/bash

# Function to check if a given line exists in a file
line_exists() {
    grep -qF "$1" "$2"
}

# Add `className: hidden` in 1s line of _category_.yml files
# or `sidebar_class_name: hidden` in 2nd line of .mdx files to hide them from sidebar (added .hidden class in markdown.css)
if ! line_exists "className: hidden" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/directives/_category_.yml"; then
    sed -i '1s/^/className: hidden\n/' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/directives/_category_.yml"
fi

if ! line_exists "className: hidden" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/scalars/_category_.yml"; then
    sed -i '1s/^/className: hidden\n/' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/scalars/_category_.yml"
fi

if ! line_exists "sidebar_class_name: hidden" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/query.mdx"; then
    sed -i '2s/^/sidebar_class_name: hidden\n/' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/query.mdx"
fi

# Add pagination_next/pagination_previous to gracefully skip the previous sidbar hidden pages, to hide them from the
# next/previous page buttons at the bottom of the webpages
if ! line_exists "pagination_prev: osx/subgraph/reference-guide/index" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/enums/permission-operation.mdx"; then
    sed -i '2s#^#pagination_prev: osx/subgraph/reference-guide/index\n#' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/enums/permission-operation.mdx"
fi

if ! line_exists "pagination_next: osx/subgraph/reference-guide/objects/standard-callback" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/plugin-version.mdx"; then
    sed -i '2s#^#pagination_next: osx/subgraph/reference-guide/objects/standard-callback\n#' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/plugin-version.mdx"
fi

if ! line_exists "pagination_prev: osx/subgraph/reference-guide/objects/plugin-version" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/standard-callback.mdx"; then
    sed -i '2s#^#pagination_prev: osx/subgraph/reference-guide/objects/plugin-version\n#' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/standard-callback.mdx"
fi

if ! line_exists "pagination_next: null" "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/transaction-actions-proposal.mdx"; then
    sed -i '2s/^/pagination_next: null\n/' "versioned_docs/version-1.3.0/osx/subgraph/reference-guide/objects/transaction-actions-proposal.mdx"
fi
