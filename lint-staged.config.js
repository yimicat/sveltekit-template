export default {
  '*.svelte': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json}': ['prettier --write']
}
