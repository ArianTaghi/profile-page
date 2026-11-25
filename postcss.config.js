import tailwindcss from '@tailwindcss/postcss'
import prefixSelector from 'postcss-prefix-selector'

export default {
  plugins: [
    tailwindcss(),
    prefixSelector({
      prefix: '.ghizilchi-demo',
      includeFiles: [/[/\\]ghizilchi[/\\]/],
      transform(prefix, selector, prefixedSelector, filePath, rule) {
        // Nested selectors inherit the scope of their outer rule.
        for (let parent = rule.parent; parent; parent = parent.parent) {
          if (parent.type === 'rule') return selector
        }
        // Framework root/body variables belong to the demo wrapper.
        if (/^(?::root|:host|html|body|#root)$/.test(selector)) return prefix
        return prefixedSelector
      },
    }),
  ],
}
