#!/bin/bash

# Function to check if a given line exists in a file
line_exists() {
    grep -qF "$1" "$2"
}

# Add `className: hidden` in 1s line of _category_.yml files
# or `sidebar_class_name: hidden` in 2nd line of .mdx files to hide them from sidebar (added .hidden class in markdown.css)
if ! line_exists "className: hidden" "docs/subgraph/reference-guide/directives/_category_.yml"; then
    sed -i '1s/^/className: hidden\n/' "docs/subgraph/reference-guide/directives/_category_.yml"
fi

if ! line_exists "className: hidden" "docs/subgraph/reference-guide/scalars/_category_.yml"; then
    sed -i '1s/^/className: hidden\n/' "docs/subgraph/reference-guide/scalars/_category_.yml"
fi

if ! line_exists "sidebar_class_name: hidden" "docs/subgraph/reference-guide/objects/query.mdx"; then
    sed -i '2s/^/sidebar_class_name: hidden\n/' "docs/subgraph/reference-guide/objects/query.mdx"
fi
