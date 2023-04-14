import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/global/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  
  let footer = document.createElement('div');
  footer.innerHTML = html;

  await decorateIcons(footer);
  block.append(footer);

  // var script = document.createElement('script');
  // script.setAttribute( 'src', '/assets/js/brightcove.js' );
  // block.append(script);
}