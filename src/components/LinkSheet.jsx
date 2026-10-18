const LinkSheet = ({ link, name, label }) => (
  <a href={link} target={link.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}>
    <i className={`devicon-${name}-plain colored`} aria-hidden="true" />
  </a>
)

export default LinkSheet
